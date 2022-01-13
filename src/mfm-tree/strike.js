import { Node } from "./node.js";

export function Strike() {
  Node.call(this);

  this.text = "Strikethrough Text";

  this.params = {};

  this.script = function (sub) {
    return "<s>" + sub + "</s>";
  }
}

Strike.prototype = Object.create(Node.prototype);
