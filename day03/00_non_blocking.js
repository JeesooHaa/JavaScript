function sleep_3() {
  // 비동기함수 
  setTimeout(function() {
    console.log('Wake up!')
  }, 3000)
}

console.log('Start sleeping') // 1
sleep_3()                     // 3
console.log('End of program') // 2

// 작업이 끝난 다음에 실행할 함수를 정의

// 콜스택 ; 함수의 실행 순서? 