import { Node } from "./node.js";

export function Bold() {
  Node.call(this);

  this.text = "Bold Text";

  this.params = {};

  this.script = function (sub) {
    return "<b>" + sub + "</b>";
  }
}

Bold.prototype = Object.create(Node.prototype);
