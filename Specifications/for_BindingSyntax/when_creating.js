/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingSyntax} from "../../Source/BindingSyntax";

describe("when creating", () => {
    const service = "Some service";
    const container = {};
    let bindingSyntax = null;
    
    beforeEach(() => bindingSyntax = new BindingSyntax(container, service));

    it("should have the container on it", () => bindingSyntax.container.should.equal(container));
    it("should have the service on it", () => bindingSyntax.service.should.equal(service));    
});