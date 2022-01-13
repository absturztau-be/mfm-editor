import { Node } from "./node.js";

export function Center () {
  Node.call(this);

  this.text = "Center";

  this.params = {};

  this.script = function (sub) {
    return "\n<center>" + sub + "</center>";
  }
};

Center.prototype = Object.create(Node.prototype);
