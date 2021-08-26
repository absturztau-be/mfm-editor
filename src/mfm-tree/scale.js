import { Node } from "./node.js";

export function Scale () {
  Node.call(this);

  this.text = "Scale";

  this.params = {
    factor: 1
  };

  this.script = () => {
    let x4s = Math.floor(this.params.factor / 6);
    let x4r = this.params.factor % 6
    let x3s = Math.floor(x4r / 4);
    let x3r = x4r % 4
    let x2s = Math.floor(x3r / 2);

    let mfm = "[content]";

    for(let x4 = 0; x4 < x4s; x4++) {
      mfm = "$[x4 " + mfm + "]";
    }
    for(let x3 = 0; x3 < x3s; x3++) {
      mfm = "$[x3 " + mfm + "]";
    }
    for(let x2 = 0; x2 < x2s; x2++) {
      mfm = "$[x2 " + mfm + "]";
    }
    return mfm;
  };
};

Scale.prototype = Object.create(Node.prototype);
