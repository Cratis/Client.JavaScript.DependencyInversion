/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Einar Ingebrigtsen. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import {BindingSyntax} from "../../../Source/BindingSyntax";

export default class 
{
    constructor() {
        this.service = "Some service";
        this.container = {
            add: sinon.stub()
        }
        this.bindingSyntax = new BindingSyntax(this.container, this.service); 
    }
}