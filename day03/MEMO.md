const XHR = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/posts/1'
XHR.open('GET', url)
XHR.addEventListener('load', function(event) {
	console.log(event)
})
XHR.send()

axios

requirement.txt == package.json 

npm install 