/* 
  변수 
*/ 
// 값을 재할당 할 수 있는 변수를 선언하는 키워드 
// 키워드가 있어야 변수선언이된다
// 블럭 유효 범위(block scope)를 갖는다 / 중괄호의 유효 범위를 갖는다 
// global scope는 어디서든 접근 가능 / 안에 있는 애들만 참조 불가능 
let x = 1
// console.log(x) // = python print 
// 변수 선언은 한번만 가능 / 재선언은 할 수 없다
// let x = 3
// 재할당은 가능 
x = 3
// console.log(x)

if (x === 3) {
  let x = '안녕하세요'
  console.log(x)
}

console.log(x)

// if (x === 3) {
//   let message = '안녕하세요'
//   console.log(message)
//   console.log(x)
// }

// console.log(message)

let y 
console.log(y) // undefined == none  

// z = 2 // var, 문제가 많다 

// const 
// 값이 변하지 않는 (재할당 할 수 없는) 상수를 선언하는 키워드 
// let 과 동일하게 블록 유효 범위(block scope)를 가진다
// '모든' 선언에서 가능한 상수를 사용해야 한다 

const MY_FAV = 20 // const 로 선언하는데 값이 없으면 error 

// MY_FAV = 30 // 재할당하려고 하면 error
if (MY_FAV === 20) {
  const MY_FAV = 30
  console.log(MY_FAV)
}

console.log(MY_FAV)

// 식별자
// 변수명은 식별자라고 불린다
// 1. 반드시 문자, 달러($), 밑줄(_)로 시작해야 한다 
// 2. 대소문자를 구분하고 Class 이름을 제외하고는 대문자로 시작하지 않는걸 권장
// 3. 예약어 사용 불가 (const, let, class, return, case...)

// 카멜 케이스(camelCase) - 객체, 함수, 변수 
// 이벤트 핸들러 - 'on' 으로 시작
const onClick = () => {}

// boolean 값  - 'is' 로 시작
let isAvailable = false  

// 함수이름
function getUsername () {}

// 파스칼 케이스(PascalCase) - 클래스, 생성자 (UpperCamelCase)
class User {}

// 대문자 스네이크 케이스 - 상수 
const API_KEY = 'asdf'
