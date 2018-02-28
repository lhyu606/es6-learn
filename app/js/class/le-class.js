{
	// 基本定义和生成实例
	class Parent{
		constructor(name='xm'){
			this.name = name
		}
	}

	let v_parent = new Parent('v')
	console.log('构造函数和实例：',v_parent)
}
{
	// 继承
	class Parent{
		constructor(name='xm'){
			this.name = name
		}
	}

	class Child extends Parent{

	}
	let v_child = new Child()
	console.log('继承',v_child)
}
{
	// 继承
	class Parent{
		constructor(name='xm'){
			this.name = name
		}
	}

	class Child extends Parent{
		constructor(name='child'){
			super(name)		//super 要放在第一行 
			this.type = 'child'
		}
	}
	let v_child = new Child('12131')
	console.log('继承',v_child)
}
{
	// getter  setter
	class Parent{
		constructor(name='xm'){
			this.name = name
		}

		get longName(){
			return 'mk->'+this.name
		}
		set longName(value){
			this.name = value
		}
	}

	let v = new Parent()
	console.log('getter',v.longName)
	v.longName = 'hello'
	console.log('getter',v.longName)
}
{
	// 静态方法
	class Parent{
		constructor(name='xm'){
			this.name = name
		}

		static tell(){
			console.log('tell')
		}
	}

	Parent.tell()
}
{
	// 静态属性
	class Parent{
		constructor(name='xm'){
			this.name = name
		}

		static tell(){
			console.log('tell')
		}
		
	}
	Parent.type = 'test'
	console.log('静态属性',Parent.type)
}









