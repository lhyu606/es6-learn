{
	// 有默认值的变量必须在最后
	function test (a,b=1){
		console.log('test(2)  b默认值',b)
	}
	test(2)
}
{
	let a = 'test'
	function test(a,b=a){
		console.log('作用域',a,b)
	}
	test('killer')
}
{
	function test(...args){
		for (let val of args) {
			console.log(val)
		};
	}
	test('a','b','c')
}
{
	console.log('a',...[1,2,5])
}
{
	let arrow = val => val*2
	console.log(arrow(2))
}
{
	function tail(x){
		console.log('tail',x)
	}
	function fx(x){
		return tail(x)
	}
	fx(312)
}














