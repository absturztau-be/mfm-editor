import { Node } from "./node.js";

export function Bounce () {
  Node.call(this);

  this.text = "Bounce";

  this.params = {};

  this.script = () => {
    return "$[bounce [content]]";
  };
};

Bounce.prototype = Object.create(Node.prototype);
