'use strict';

function *randomStuff() {
  while (true) {
    yield Math.random();
  }
}

let it = randomStuff();

console.log(it.next());
console.log(it.next());
console.log(it.next());
