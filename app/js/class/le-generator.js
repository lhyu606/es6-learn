{
	// generator 的基本定义
	let tell = function* (){
		yield 'a'
		yield 'b'
		return 'c'
	}

	let k = tell()
	console.log(k.next())
	console.log(k.next())
	console.log(k.next())
	console.log(k.next())
}
{
	let obj = {}
	obj[Symbol.iterator] = function*(){
		yield 1
		yield 2
		yield 3
	}
	for (let value of obj) {
		console.log('value',value)
	};
}
{
	let stat = function* (){
		while (1){
			yield 'A'
			yield 'B'
			yield 'C'
		}
	}
	let status = stat()
	console.log(status.next())
	console.log(status.next())
	console.log(status.next())
	console.log(status.next())
	console.log(status.next())
}

// {
	// let stat = async function (){
	// 	while (1){
	// 		yield 'A'
	// 		yield 'B'
	// 		yield 'C'
	// 	}
	// }
	// let status = stat()
	// console.log(status.next())
	// console.log(status.next())
	// console.log(status.next())
	// console.log(status.next())
	// console.log(status.next())
// }
{
	let draw = function(count){
		// 抽奖逻辑
		console.info(`剩余：${count}次`)
	}
	let residue = function* (count){
		while(count>0){
			count--
			yield draw(count)
		}
	}

	let star = residue(5);
	let btn = document.createElement('button')
	btn.id = 'start'
	btn.textContent = '抽奖'
	document.body.appendChild(btn)
	document.getElementById('start').addEventListener('click',function(){
		star.next()
	},false)
}
{
	// 长轮询
	let ajax = function*(){
		yield new Promise((resolve,reject)=>{
			setTimeout(function() {
				resolve({code:0})
				// resolve({code:1})
			}, 200);
		})
	}

	let pull = ()=>{
		let generator = ajax();
		let step = generator.next()
		step.value.then((d)=>{
			if (d.code!=0) {
				setTimeout(()=>{
					console.info('wait')
					pull()
				},1000)
			}else{
				console.info(d)
			}
		})
	}

	pull()
}










