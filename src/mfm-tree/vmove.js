import { Node } from "./node.js";

export function VMove () {
  Node.call(this);

  this.text = "Vertical Move";

  this.params = {
    distance: 10,
    speed: 1
  };

  this.script = function (sub) {
    return "$[spin.speed="
      + this.params.speed
      + "s $[spin.left,speed="
      + (this.params.speed / 2)
      + "s \\(\\hspace{"
      + this.params.distance
      + "mu}\\)$[spin.speed="
      + this.params.speed
      + "s "
      + sub
      + "]]\\(\\hspace{"
      + this.params.distance
      + "mu}\\)]";
  };
};

VMove.prototype = Object.create(Node.prototype);
