'use strict';

function *getTodos() {
  yield "Buy beer";
  yield "Write code";
  yield "Sleep";
  return "Wake up";
}

let it = getTodos();

var todo = it.next();
console.log(todo);

// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for (var todo of getTodos()) {
//   console.log(todo);
// }
