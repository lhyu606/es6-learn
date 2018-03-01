{
	// 类修饰器
	// 常用库：core-decorators;
	// npm install core-decorators
}
{
	let readonly = (target,name,descriptor)=>{
		descriptor.writable = false
		return descriptor
	}

	class Test {
		@readonly
		time(){
			return '2017-03-22'
		}
	}

	let test = new Test()

	// test.time = ()=>{
	// 	console.log('reset time ....')
	// }   // 会报错
	console.log(test.time())
}
{
	let typename = (target,name,descriptor)=>{
		target.myname = 'hello'
	}
	@typename
	class Test{

	}
	console.log('类修饰符：',Test.myname)
}
{
	let log = (type)=>{
		return (target,name,descriptor)=>{
			let src_method = descriptor.value
			descriptor.value = (...arg)=>{
				src_method.apply(target,arg)
				console.info(`log ${type}`)
			}
		}
	}

	class AD{
		@log('show')
		show(){
			console.info('ad is show')
		}
		@log('click')
		click(){
			console.info('ad is click')
		}
	}

	let ad = new AD();
	ad.show()
	ad.click()
}
























