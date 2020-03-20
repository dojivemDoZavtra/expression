let res = 'aaa [2] bbb [3] ccc [12] ddd'.replace(/[(\d+)]/g, function(match){
	return match*2
})
console.log(res)