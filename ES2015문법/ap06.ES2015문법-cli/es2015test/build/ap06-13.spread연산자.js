"use strict";

var _console;
/*

  스프레드 사용법을 학습한다.

  ES 5에서는
  arguments 매개변수는 유사 배열 객체다.
    length 프로퍼티가 있다.
    Array  메서드를 사용할 수 없다.
    arrow function에서는 arguments는 사용할 수 없다.

  ES2015 에서는
  rest 매개변수는 배열이다.
    rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
    함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

  Spread 연산자는 ... 이다.
    이터러블(iterable) 객체를 "개별" 요소로 분리
    이터러블(iterable) 객체에는 Array, Object, String등이 있다.
    iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/

var cities = ['서울', '부산', '제주'];
console.log(cities[0], cities[1], cities[2]); // 서울 부산 제주
(_console = console).log.apply(_console, cities); // 서울 부산 제주

var east = ['U', 'K', 'T'];
var west = ['N', 'C', 'G'];

//east와 west를 결합하여 countries 배열을 만드시오
var countries1 = [].concat(east).concat(west);
console.log(countries1);

//spread 연산자 사용하여
//spread 연산자 는 새로운 배열이나 새로운 객체를 만들 때 사용된다.
var countries2 = [].concat(east, west);
console.log(countries2);
var lakes = ['경포호', '화진포', '송지호', '청초호'];
var first = lakes[0],
  rest = lakes.slice(1); // ['경포호', '화진포', '송지호', '청초호'];
console.log(first); //'경포호'
console.log(rest); // ['화진포', '송지호', '청초호']

var _ref = [].concat(east, west),
  city1 = _ref[0],
  cityrest = _ref.slice(1);
//...cityrest:rest 연산자, ...east, ...west :spread 연산자
console.log(cityrest); // ['K', 'T', 'N', 'C', 'G']