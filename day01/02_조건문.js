// const username = prompt('안녕하세요? 당신은 누구?')

// let message = ''

// if (username == 'ssafy') {
//   message = '<h1>안녕!</h1>'
// } else if (username == 'admin') {
//   message = '<h1>안녕 주인</h1>'
// } else {
//   message = `<h1>Welcome ${username}</h1>`
// }

// document.write(message)

// switch 문 

const username = prompt('Who are you?')

let message = ''

switch (username) {
  case 'ssafy': {
    message = '<h1>안녕!</h1>'
    console.log(message)
    // break 없으면 밑에 case 까지 모두 실행함 
    break
  }
  case 'admin': {
    message = '<h1>안녕 주인</h1>'
    console.log(message)
    break
  }
  default: {
    message = `<h1>Welcome ${username}</h1>`
    console.log(message)
  }
}

document.write(message)