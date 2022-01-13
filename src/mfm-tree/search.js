import { Node } from "./node.js";

export function Search() {
  Node.call(this);

  this.text = "Search Box";

  this.params = {};

  this.script = function (sub) {
    return "\n" + sub + " [search]";
  }
}

Search.prototype = Object.create(Node.prototype);
