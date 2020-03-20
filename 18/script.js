let input = document.getElementById('input')

function httpCheck() {
	console.log(/^http:|^https:/.test(input.value))
}

function jpgCheck() {
	console.log(/\.jpg$|\.jpeg$/.test(input.value))
}

function numberCheck() {
	console.log(input.value.length > 0 && input.value.length <= 12 && /^\d+$/.test(input.value))
}

function dateCheck() {
	console.log(/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(input.value))
}

function mailCheck() {
	console.log(/.+@.+\.[a-z]+$/.test(input.value))
}