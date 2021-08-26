import { Node } from "./node.js";

export function Tree () {
  this.root = new Node();
}

Tree.prototype.generate = function () {
  return this.root.generate();
}
