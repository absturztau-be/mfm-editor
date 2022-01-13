import { Node } from "./node.js";

export function Rainbow () {
  Node.call(this);

  this.text = "Rainbow";

  this.params = {};

  this.script = (sub) => {
    return "$[rainbow " + sub + "]";
  };
};

Rainbow.prototype = Object.create(Node.prototype);
