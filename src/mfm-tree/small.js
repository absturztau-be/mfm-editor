import { Node } from "./node.js";

export function Small() {
  Node.call(this);

  this.text = "Small Text";

  this.params = {
    level: 1
  }

  this.script = function (sub) {
    let smallMark = "<small>";
    for (let i = 1; i < Math.min(this.params.level, 10); i++) {
      smallMark += "<small>";
    }
    return smallMark + sub + smallMark.replaceAll("<", "</");
  }
}

Small.prototype = Object.create(Node.prototype);
