import { Node } from "./node.js";

export function Shake () {
  Node.call(this);

  this.text = "Shake";

  this.params = {
    speed: 1
  };

  this.script = () => {
    let mfm = "$[shake";
    if (this.params.speed) {
      mfm += ".speed=" + this.params.speed + "s";
    }
    return mfm + " [content]]";
  };
}

Shake.prototype = Object.create(Node.prototype);
