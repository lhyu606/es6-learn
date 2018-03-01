// import './class/le-num.js'
// import './class/le-arr.js'
// import './class/le-func.js'
// import './class/le-objExtend.js'
// import './class/le-symbol.js'
// import './class/le-setAndMap.js'
// import './class/le-proxy--Reflect.js'
// import './class/le-class.js'
// import './class/le-promise.js'
// import './class/le-iterator.js'
// import './class/le-generator.js'
// import './class/le-decorator.js'
// import './class/le-module.js'

// import {A,test,Hello} from './class/le-module.js';
// import * as leModule from './class/le-module.js';
// console.log('A',A)
// console.log('test',test)
// console.log('Hello',Hello)
// console.log(leModule.A)

// import leModule2 from './class/le-module.js'
// console.log(leModule2.A)

{
	let arr = Array.of(3,4,7,9,11);
	console.log('arr=',arr)

	let empty = Array.of();
	console.log('empty',empty)
}
{
	let p = document.querySelectorAll('p');
	let pArr = Array.from(p);
	pArr.forEach((item)=>{
		console.log(item)
	});

	console.log(Array.from([1,3,5],(item)=>item*2))
}
{
	console.log('fill',[1,'a',undefined].fill(7));
	console.log('fill2',['a','b','c','d','e','f'].fill(7,1,3))
}
{
	for (var idx of ['a','1','ks'].keys()) {
		console.log('keys:',idx)
	};
	// for (var val of ['a','1','ks'].values()) {
	// 	console.log('values:',val)
	// }; // 兼容babel-polyfill
	for (var [idx,val] of ['a','1','ks'].entries()) {
		console.log('idx:',idx,'val',val)
	};
}
{
	console.log([1,2,3,4,5,6].copyWithin(0,3,5))
	console.log('find',[1,2,3,4,5,6].find((item)=>item>3))
	console.log('find',[1,2,3,4,5,6].findIndex((item)=>item>3))
}
{
	console.log('includes(1)',[1,2,NaN].includes(1))
	console.log('includes(NaN)',[1,2,NaN].includes(NaN))
}












