import { Node } from "./node.js";

export function Flip () {
  Node.call(this);

  this.text = "Flip";

  this.params = {
    horizontal: false,
    vertical: false
  };

  this.script = (sub) => {
    let mfm = "$[flip";
    const params = [];
    if (this.params.horizontal) {
      params.push("h");
    }
    if (this.params.vertical) {
      params.push("v");
    }
    if (params.length > 0) {
      mfm += "." + params.join(",");
    } else {
      return sub;
    }
    return mfm + " " + sub +"]";
  };
};

Flip.prototype = Object.create(Node.prototype);
