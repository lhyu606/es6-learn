{
	// 简介表示法
	let o = 1;
	let k = 2;
	let es5 = {
		o:o,
		k:k
	}
	let es6 = {
		o,
		k,
		method(){
			console.log('es6 method')
		}
	}
	console.log(es5,es6);
	es6.method()
}
{
	// 属性表达式
	let a = 'b'
	let es5 = {
		a:'c'
	}

	let es6 = {
		[a]: 'c'
	}
	console.log('变量做属性：',es6)
}
{
	console.log('字符串',Object.is('abc','abc'),'abc'==='abc')
	console.log('数组',Object.is([],[]),[]===[])
}
{
	let o = 1;
	let k = 2;
	let es6 = {
		o,
		k,
		method(){
			console.log('es6 method')
		}
	}
	for (let [key,val] of Object.entries(es6)) {
		console.log(key,val)
	};
}
{
	// 扩展运算符 兼容不了
	// let {a,b,..c} = {a:'a',b:'b',c:'c',d:'d'}
	// console.log(a,b,c)
}






