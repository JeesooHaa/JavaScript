const numbers = [1, 2, 3, 4]

numbers[0] // 1
numbers[-1] // undefined 
numbers.length // 4

// 배열 뒤집기 => 원본을 파괴한다 
numbers.reverse() // [4, 3, 2, 1]
numbers // [4, 3, 2, 1] 

numbers.reverse() // [1, 2, 3, 4]
numbers // [1, 2, 3, 4]

// 배열에 아이템 추가하기, 마지막 인덱스로 추가 
numbers.push(5) // 5, [1, 2, 3, 4, 5]
numbers.push('abc') // 추가 후 배열의 길이 값을 반환 

// 가장 마지막 요소 삭제
numbers.pop() // 제거된 값을 반환 
numbers // [1, 2, 3, 4, 5]

// 가장 앞에 요소 추가 
numbers.unshift('a') // 6, new length 
numbers // ["a", 1, 2, 3, 4, 5]

// 첫번째 요소 제거 후 반환
numbers.shift() // 'a'

// includes - 특정 아이템이 배열에 있는지 여부를 반환 
numbers.includes(0) // false
numbers.includes(1) // true 

// indexOf - 특정 아이템의 index 를 찾아서 반환 
numbers.push('a')
numbers.push('a')
numbers.indexOf('a') // 5, 일치하는 가장 첫번째 아이템의 인덱스를 반환 
numbers.indexOf('b') // -1, 일치하는 값이 없다면 -1 반환

// 배열의 아이템을 함수의 인자 separator 로 이어서 문자열로 반환
// 원본은 바뀌지 않는다 
numbers.join() // "1,2,3"
numbers.join('') // "123"
numbers.join('-') // "1-2-3"


// Object

const name = 'jeong'

const me = {
  // name: name, 변수의 이름과 key 의 이름이 같다면 생략 가능 Object Literal 
  name,
  // 특이한 케이스가 아니라면 보통 이런식으로 하지 않는다 phoneNumber 가 맞는 방식 
  'phone number': '010-1234-5678',
  appleProducts: {
    iPhone: 'SE',
    iPod: 'Mini',
  }
}

me.name
me['name']


// JSON

const jsonData = JSON.stringify(me) // 직렬화 => JS Object 를 String 값으로 바꾼다 
const parseData = JSON.parse(jsonData) // 역직렬화 => String 을 JS Object 로 