import { Node } from "./node.js";

export function Offset () {
  Node.call(this);

  this.text = "Offset";

  this.params = {
    x: 0,
    y: 0
  };

  this.script = (sub) => {
    let mfm = "";
    if (this.params.x !== 0 || this.params.y !== 0) {
      mfm += "\\(";
    }
    if (this.params.y !== 0) {
      mfm += "\\\\[" + this.params.y + "mu]";
    }
    if (this.params.x !== 0) {
      mfm += "\\hspace{" + this.params.x + "mu}";
    }
    if (mfm.length > 0) {
      mfm += "\\)";
    }
    mfm += sub;
    return mfm;
  }
};

Offset.prototype = Object.create(Node.prototype);
