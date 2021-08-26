export function Node () {
  this.text = "Node";
  this.children = [];
  this.params = {};
  this.script = function () {
    return "[content]";
  };
}

Node.prototype.generate = function () {
  let sub = "";
  for (const child of this.children) {
    sub += child.generate();
  }
  if (sub.length === 0) 
  {
    return this.script();
  }
  return this.script().replace("[content]", sub);
};
