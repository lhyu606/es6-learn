{
	let obj = {
		time: '2017-01-22',
		name:'net',
		_r: 123
	}

	let monitor = new Proxy(obj,{
		// 拦截对象属性的读取
		get(target,key){
			return target[key].replace('2017','2018')
		},
		// 拦截对象属性的设置
		set(target,key,value){
			if(key==='name'){
				return target[key]=value
			}else{
				return target[key]
			}
		},
		// 拦截 key in object 操作
		has(target,key){
			if(key==='name'){
				return target[key]
			}else{
				return false
			}
		},
		// 拦截  delete
		deleteProperty(target,key){
			if(key.indexOf('_')>-1){
				delete target[key]
				return true
			}else{
				return target[key]
			}
		},
		// 拦截 Object.keys,Object.getOwnPropertySymbol,Object.getOwnPropertyNames
		ownKeys(target){
			return Object.keys(target).filter(item=>item!='time')
		}
	})
	console.log('get',monitor.time)

	monitor.time = '2019'
	console.log('set',monitor.time)
	monitor.name = 'ten'
	console.log('set',monitor.name)

	console.log('has','name' in monitor,'time' in monitor)

	console.log('ownKeys',Object.keys(monitor))

	delete monitor.time
	console.log('delete time',monitor)
	delete monitor._r
	console.log('delete _r',monitor)
}
{
	let obj = {
		time: '2017-01-22',
		name:'net',
		_r: 123
	}
	console.log('Reflect.get(obj)',Reflect.get(obj,'time'))
	console.log('Reflect.set(obj)',Reflect.set(obj,'name','newName'),obj)
	console.log('Reflect.has(obj)',Reflect.has(obj,'time'))
}
{
	function validator (target,validator) {
		return new Proxy(target,{
			_validator:validator,
			set(target,key,value,proxy){console.log('set')
				if(target.hasOwnProperty(key)){
					let va = this._validator[key];
					if(!!va(value)){
						return Reflect.set(target,key,value,proxy)
					}else{
						throw Error(`不能设置${key} 到 ${value}`)
					}
				}else{
					throw Error(`${key} 不存在`)
				}
			}
		})
	}

	const personValidators = {
		name(val){
			return typeof val==='string'
		},
		age(val){
			return typeof val === 'number' && val>18
		}
	}
	class Person{
		constructor(name,age){
			this.name = name;
			this.age = age;
			return validator(this,personValidators)
		}
	}

	const person = new Person('lilei',5)
	console.info(person);
}







