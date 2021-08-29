import { Node } from "./node.js";

export function Tada () {
  Node.call(this);

  this.text = "Tada";

  this.params = {};

  this.script = () => {
    return "$[tada [content]]";
  }
}

Tada.prototype = Object.create(Node.prototype);
