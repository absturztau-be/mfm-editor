import { Node } from "./node.js";

export function KaTeX() {
  Node.call(this);

  this.text = "KaTeX";

  this.params = {
    text: "e^{i\\pi}+1=0"
  };

  this.script = () => {
    if (this.params.text.search(/[\r\n]/) != -1) {
      return "\n\\[" + this.params.text + "\\]";
    } else {
      return "\\(" + this.params.text + "\\)";
    }
  };
};

KaTeX.prototype = Object.create(Node.prototype);
