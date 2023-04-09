//  변수의 호이스팅

console.log(aaa);
var aaa;
console.log(aaa); //변수의 사용 === undefined
aaa = '변수의 호이스팅';
console.log(aaa); //변수의 사용 === 변수의 호이스팅

console.log(bbb);
const bbb = '변수의 호이스팅2';

var msg = 'global scope';
if (true) {
  var msg = 'block scope';
}

let msg2 = 'global scope';
if (true) {
  let msg2 = 'block scope';
}

// 함수의 호이스팅
debugger;
console.log(add(1, 2)); //3
const add = (a, b) => {
  return a + b;
};
