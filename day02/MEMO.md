DOM ; Document Object Model 
문서를 조작 할수있는 js의 객체 모델 
js 에서만 존재...
DOM Tree

요소를 선택할 수 있고
변수를 할당할 수 있다 

// 특정 요소를 선택 
document.querySelector('CSS Selector')
const bg = document.querySelector('div.bg')
bg.querySelector('img#dino')
const dino = bg.querySelector('#dino')

dino.src = ''
dino.remove() == document.querySelector('#dino').remove()

// 대상의 자식 요소 삭제하기 
bg.firstElementChild.remove()
bg.removeChild(bg.firstElementChild)


dino.remove()
const newDino = document.createElement('img')
newDino.id = 'newDino'
newDino.src = 'https://store-images.s-microsoft.com/image/apps.38351.14426311725358695.736eb785-1d29-478c-a909-1900849773e9.4247f5ee-1daa-4c97-96c2-23868f1fbc45?mode=scale&q=90&h=200&w=200&background=%230078D7'
newDino.alt = 'dino picture'
bg.appendChild(newDino)

js 가 돌면서 tag 를 생성 ; 동적프로그래밍...


h1.innerText

input.value