import { Node } from "./node.js";

export function Bounce () {
  Node.call(this);

  this.text = "Bounce";

  this.params = {};

  this.script = (sub) => {
    return "$[bounce " + sub + "]";
  };
};

Bounce.prototype = Object.create(Node.prototype);
