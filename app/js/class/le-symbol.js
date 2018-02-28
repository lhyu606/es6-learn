{
	// 声明
	let a1 = Symbol();
	let a2 = Symbol();
	console.log(a1,a2,a2 == a1);
	let a3 = Symbol.for('a3');
	let a4 = Symbol.for('a3');
	console.log(a3,a4)
	console.log(a3===a4)
}
{
	let a1 = Symbol.for('abc')
	let obj = {
		[a1]: '123',
		'abc':345,
		'c':456
	}
	console.log('obj',obj)
	for(let [key,val] of Object.entries(obj)){
		console.log('let of :',key,val)
	}

	Object.getOwnPropertySymbols(obj).forEach((item)=>{
		console.log('getOwnPropertySymbols ',item,obj[item])
	})

	Reflect.ownKeys(obj).forEach((item)=>{
		console.log('ownKeys ',item,obj[item])
	})
}















