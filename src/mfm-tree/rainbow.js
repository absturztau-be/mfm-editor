import { Node } from "./node.js";

export function Rainbow () {
  Node.call(this);

  this.text = "Rainbow";

  this.params = {};

  this.script = () => {
    return "$[rainbow [content]]";
  };
};

Rainbow.prototype = Object.create(Node.prototype);
