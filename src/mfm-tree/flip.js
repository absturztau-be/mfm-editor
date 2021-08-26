import { Node } from "./node.js";

export function Flip () {
  Node.call(this);

  this.text = "Flip";

  this.params = {
    horizontal: false,
    vertical: false
  };

  this.script = () => {
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
      return "[content]";
    }
    return mfm + " [content]]";
  };
};

Flip.prototype = Object.create(Node.prototype);
