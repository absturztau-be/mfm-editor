import { Node } from "./node.js";

export function Text() {
  Node.call(this);

  this.text = "Text";

  this.params = {
    text: "content"
  }

  this.script = function () {
    return this.params.text;
  }
}

Text.prototype = Object.create(Node.prototype);
