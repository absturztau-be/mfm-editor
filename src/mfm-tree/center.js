import { Node } from "./node.js";

export function Center () {
  Node.call(this);

  this.text = "Center";

  this.params = {};

  this.script = function () {
    return "\n<center>[content]</center>";
  }
};

Center.prototype = Object.create(Node.prototype);
