import { Node } from "./node.js";

export function Jelly () {
  Node.call(this);

  this.text = "Jelly";

  this.params = {
    speed: 1
  };

  this.script = (sub) => {
    let mfm = "$[jelly";
    if (this.params.speed !== 1) {
      mfm += ".speed=" + this.params.speed + "s";
    }
    return mfm + " " + sub + "]";
  };
}

Jelly.prototype = Object.create(Node.prototype);
