"use strict";

/*
 (구조) 분해 할당에 대해서 알아본다.
  배열 분해 할당은 배열의 순번을 이용해서 매핑한다.
  객체 분해 할당은 객체의 프로터티 명을 이용해서 매핑한다.
*/
debugger;
var points = [20, 30, 40];
var x1 = points[0]; //20
var y1 = points[1]; //30
var z1 = points[2]; //40
console.log(x1, y1, z1);

// 배열분해할당
var x2 = points[0],
  y2 = points[1],
  z2 = points[2];
console.log(x2, y2, z2); // 20, 30, 40

// 두번째 값 무시하기
var x3 = points[0],
  z3 = points[2];
console.log(x3, z3); // 20, 40

// 세번째 값 무시하기
var x4 = points[0],
  z4 = points[2];
console.log(x4, z4); // 20, 40

// 객체 분해 할당
var car = {
  type: 't',
  color: 's',
  model: 2023
};

// ES5로 빼내기
var type1 = car.type;
var color1 = car.color;
var model1 = car.model1;
console.log(type1, color1, model1);

// ES2015 를 사용하여 빼내기
var type = car.type,
  color = car.color,
  model = car.model,
  gear = car.gear;
console.log(type, color, model, gear); // t, s, 2023,