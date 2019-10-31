const axios = require('axios')

// axios ; 요청을 보낸다 

const url = 'https://jsonplaceholder.typicode.com/posts/1'

// .then() 요청이 다 끝났다면은?

// 요청
axios.get(url)
  // 응답 도착
  .then(function(response) {
    // 출력 
    console.log(response.data)
  })

// 비동기적 접근...
// 콜백 함수...