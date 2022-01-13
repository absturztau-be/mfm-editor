import { Node } from "./node.js";

export function Italic() {
  Node.call(this);

  this.text = "Italic Text";

  this.params = {};

  this.script = function (sub) {
    return "<i>" + sub + "</i>";
  }
}

Italic.prototype = Object.create(Node.prototype);
