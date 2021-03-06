/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingSyntax} from "../../Source/BindingSyntax";
import {TypeActivationStrategy} from "../../Source/Strategies/TypeActivationStrategy";
import {ScopeSyntax} from "../../Source/ScopeSyntax";
import {TransientScope} from "../../Source/Scopes/TransientScope";
import {Binding} from "../../Source/Binding";
import * as Context from "./given/a_bound_service";

describe("when binding to type", () => {
    const type = function() {};
    let context = null;
    let scopeSyntax = null;
    let binding = null;
    
    beforeEach(() => {
        context = new Context.default();
        context.bindingSyntax.container.add = (input) => {
            binding = input;
        }; 
        
        (becauseOf => {
            scopeSyntax = context.bindingSyntax.to(type);
        })();
    });

    it("should set the correct constant activation strategy on the syntax", () => (context.bindingSyntax.strategy instanceof TypeActivationStrategy).should.be.true);
    it("should set the scope syntax on the binding syntax", () => (context.bindingSyntax.scopeSyntax instanceof ScopeSyntax).should.be.true);
    it("should return a scope syntax", () => scopeSyntax.should.be.instanceof(ScopeSyntax));
    it("should add a binding to the container", () => binding.should.be.instanceof(Binding));
    it("should pass the service to the binding", () => binding.service.should.equal(context.bindingSyntax.service));
    it("should pass the strategy to the binding", () => binding.strategy.should.equal(context.bindingSyntax.strategy));
    it("should pass a transient scope to the binding", () => binding.scope.should.be.instanceof(TransientScope));
});