export function concat(xss) {
  return ([]).concat(...xss);
}

export function intersperse(sep, xs) {
  return concat(xs.map(x => [sep, xs])).splice(1);
}
