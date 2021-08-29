import { Node } from "./node.js";

export function Twitch () {
  Node.call(this);

  this.text = "Twitch";

  this.params = {
    speed: 1
  };

  this.script = () => {
    let mfm = "$[twitch";
    if (this.params.speed) {
      mfm += ".speed=" + this.params.speed + "s";
    }
    return mfm + " [content]]";
  };
};

Twitch.prototype = Object.create(Node.prototype);
