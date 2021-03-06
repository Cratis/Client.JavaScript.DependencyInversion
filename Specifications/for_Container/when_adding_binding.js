/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import * as Context from "./given/an_empty_container";
import {Binding} from "../../Source/Binding";

describe("when adding a binding", () => {
    let context = null;
    let binding = null;

    beforeEach(() => {
        context = new Context.default();
        binding = new Binding("service", "strategy", "scope");

        (becauseOf => {
            context.container.add(binding);
        })();
    });

    it("should hold the added binding", () => context.container.bindings.should.contain(binding));
});