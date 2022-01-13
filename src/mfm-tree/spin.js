import { Node } from "./node.js";

export function Spin () {
  Node.call(this);

  this.text = "Spin";

  this.params = {
    speed: 0.5,
    direction: "right",
    alternate: false,
    axis: "z",
    pivotX: 0,
    pivotY: 0
  };

  this.script = function (sub) {
    let paramsArray = [];
    if (this.params.axis !== "z") {
      paramsArray.push(this.params.axis);
    }
    if (this.params.direction === "left") {
      paramsArray.push("left");
    }
    if (this.params.alternate) {
      paramsArray.push("alternate");
    }
    paramsArray.push("speed=" + this.params.speed + "s");
    let baseSpin = "$[spin." + paramsArray.join(",") + " ";
    if (this.params.pivotY < 0) {
      baseSpin += "\\(\\\\[" + Math.abs(this.params.pivotY) + "mu]\\)";
    }
    if (this.params.pivotX < 0) {
      baseSpin += "\\(\\hspace{" + Math.abs(this.params.pivotX) + "mu}\\)";
    }
    baseSpin += sub;
    if (this.params.pivotX > 0) {
      baseSpin += "\\(\\hspace{" + Math.abs(this.params.pivotX) + "mu}\\)";
    }
    if (this.params.pivotY > 0) {
      baseSpin += "\\(\\\\[" + Math.abs(this.params.pivotY) + "mu]\\)";
    }
    return baseSpin + "]";
  };
}

Spin.prototype = Object.create(Node.prototype);
