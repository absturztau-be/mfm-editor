import { Node } from "./node.js";

export function Jelly () {
  Node.call(this);

  this.text = "Jelly";

  this.params = {
    speed: 1
  };

  this.script = () => {
    let mfm = "$[jelly";
    if (this.params.speed !== 1) {
      mfm += ".speed=" + this.params.speed + "s";
    }
    return mfm + " [content]]";
  };
}

Jelly.prototype = Object.create(Node.prototype);
