import {Inline, Attribute} from "../../../../git/prosemirror/dist/model"
import {insertCSS} from "../../../../git/prosemirror/dist/dom"
import {defParser} from "../utils"

export class Input extends Inline {}

Input.attributes = {
	name: new Attribute(),
	type: new Attribute({default: "text"}),
	value: new Attribute(),
}

defParser(Input,"widgets-input")

Input.prototype.serializeDOM = (node,s) => s.renderAs(node,"input",node.attrs)

insertCSS(`
		
.widgets-input {}

`)