import { Node } from "./node.js";

export function Jump () {
  Node.call(this);

  this.text = "Jump";

  this.params = {};

  this.script = (sub) => {
    return "$[jump " + sub + "]";
  };
}

Jump.prototype = Object.create(Node.prototype);
