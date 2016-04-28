'use strict';

function *getTodos() {
  yield "Buy beer";
  yield "Write code";
  yield *moreTodos();
  yield "Sleep";
}

function *moreTodos() {
  yield "Make dinner";
  yield "Workout";
}

for (let todo of getTodos()) {
  console.log(todo);
}

// let it = getTodos();
// console.log(it.next());
// try {
//   it.throw("This error was thrown");
// }
// catch(err) {
//   console.log(err);
// }
// console.log(it.next());

// let it2 = getTodos();
// it2.return();
