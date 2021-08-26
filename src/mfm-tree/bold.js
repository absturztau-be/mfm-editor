import { Node } from "./node.js";

export function Bold() {
  Node.call(this);

  this.text = "Bold Text";

  this.params = {
    level: 1
  }

  this.script = function () {
    let boldMark = "**";
    for (let i = 1; i < Math.min(this.params.level, 4); i++) {
      boldMark += "*";
    }
    return boldMark + "[content]" + boldMark;
  }
}

Bold.prototype = Object.create(Node.prototype);
