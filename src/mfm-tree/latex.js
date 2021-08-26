import { Node } from "./node.js";

export function LaTeX() {
  Node.call(this);

  this.text = "LaTeX";

  this.params = {
    LaTeX: "e^{i\\pi}+1=0"
  };

  this.script = () => {
    return "\\(" + this.params.LaTeX + "\\)";
  };
};

LaTeX.prototype = Object.create(Node.prototype);
