"use strict";

/*
  ES2015의 template literal( 백틱, ` ) 에 대해서 알아본다.
  template literal 의 용도
  1. 여러줄 문자열 만들 때
  2. 변수 치환
*/
var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = "".concat(string1, "\n").concat(string2);
console.log(greeting);

// 이렇게는 쓰지 말자. 권장
var value1 = 1;
var value2 = 2;
var value3 = value1 * value2;
var value4 = value1 == value2 ? '참' : '거짓';
var operator1 = "\uACF1\uC148\uAC12\uC740 ".concat(value3, "\uC785\uB2C8\uB2E4.");
var operator2 = "".concat(value4, "\uC785\uB2C8\uB2E4.");
var student = {
  name: 'John Kagga',
  city: 'Kampala'
};

// ES5
var message1 = 'Hello ' + student.name + ' from ' + student.city;
console.log(message1); // Hello John Kagga from Kampala

// ES2015
var message2 = "Hello ".concat(student.name, " from ").concat(student.city);
console.log(message2); // Hello John Kagga from Kampala