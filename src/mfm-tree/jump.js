import { Node } from "./node.js";

export function Jump () {
  Node.call(this);

  this.text = "Jump";

  this.params = {};

  this.script = () => {
    return "$[jump [content]]";
  };
}

Jump.prototype = Object.create(Node.prototype);
