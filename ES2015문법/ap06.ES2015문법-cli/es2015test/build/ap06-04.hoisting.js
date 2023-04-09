"use strict";

//  변수의 호이스팅

console.log(aaa);
var aaa;
console.log(aaa); //변수의 사용 === undefined
aaa = '변수의 호이스팅';
console.log(aaa); //변수의 사용 === 변수의 호이스팅

console.log(bbb);
var bbb = '변수의 호이스팅2';
var msg = 'global scope';
if (true) {
  var msg = 'block scope';
}
var msg2 = 'global scope';
if (true) {
  var _msg = 'block scope';
}

// 함수의 호이스팅
debugger;
console.log(add(1, 2)); //3
var add = function add(a, b) {
  return a + b;
};