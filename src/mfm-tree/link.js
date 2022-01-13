import { Node } from "./node.js";

export function Link () {
  Node.call(this);

  this.text = "Link";

  this.params = {
    text: "misskey",
    href: "https://misskey.io",
    preview: true
  };

  this.script = () => {
    return (this.params.preview ? "" : "?") + "[" + this.params.text + "](<" + this.params.href + ">)";
  };
}

Link.prototype = Object.create(Node.prototype);
