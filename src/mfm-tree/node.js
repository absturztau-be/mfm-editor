export function Node () {
  this.text = "Node";
  this.children = [];
  this.params = {};
  this.script = (sub) => sub || "ówò";
}

Node.prototype.generate = function () {
  return this.script(
    this.children
      .map(child => child.generate())
      .join('')
  );
};
