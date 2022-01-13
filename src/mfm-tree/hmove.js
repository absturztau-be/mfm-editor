import { Node } from "./node.js";

export function HMove () {
  Node.call(this);

  this.text = "Horizontal Move";

  this.params = {
    distance: 10,
    speed: 1
  };

  this.script = function (sub) {
    return "$[spin.speed="
      + this.params.speed
      + "s \\(\\hspace{"
      + this.params.distance
      + "mu}\\)$[spin.left,speed="
      + (this.params.speed / 2)
      + "s \\(\\hspace{"
      + this.params.distance
      + "mu}\\)$[spin.speed="
      + this.params.speed
      + "s "
      + sub
      + "]]]";
  };
};

HMove.prototype = Object.create(Node.prototype);
