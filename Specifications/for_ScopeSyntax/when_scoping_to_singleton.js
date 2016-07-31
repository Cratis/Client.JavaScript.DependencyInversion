/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Context from "./given/an_undefined_scope";
import {SingletonScope} from "../../Source/Scopes/SingletonScope";
import {Binding} from "../../Source/Binding";

describe("when scoping to singleton", () => {
    let context = null;
    let binding = null;

    beforeEach(() => {
        context = new Context.default();
        context.bindingSyntax.container.add = (input) => {
            binding = input;
        }; 

        (becauseOf => {
            context.scopeSyntax.asSingleton();
        })();
    });

    it("should set it to be a singleton scope", () => context.scopeSyntax.scope.should.be.instanceof(SingletonScope));
    it("should add a binding to the container", () => binding.should.be.instanceof(Binding));
    it("should pass the service to the binding", () => binding.service.should.equal(context.bindingSyntax.service));
    it("should pass the strategy to the binding", () => binding.strategy.should.equal(context.bindingSyntax.strategy));
    it("should pass the scope to the binding", () => binding.scope.should.equal(context.scopeSyntax.scope));
});