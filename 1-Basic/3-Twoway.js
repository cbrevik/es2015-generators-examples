'use strict';

function *foo(number) {
  var A = yield (2 + number);
  console.log('A: ' + A);

  var B = yield (2 + A);
  console.log('B: ' + B);
}

let it = foo(2);

let C = it.next(10);
console.log('C: ' + C.value);

let D = it.next(20);
console.log('D: '+ D.value);

it.next();
