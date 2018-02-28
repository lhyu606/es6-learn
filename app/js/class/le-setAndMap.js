{
	let list = new Set();
	list.add(5);
	list.add(7);

	console.log(list)
	console.log('list 长度：',list.size)
}
{
	let arr = [1,2,3,4,5]
	let list = new Set(arr)
	console.log(list.size)
}
{
	let list = new Set();
	list.add(1)
	list.add(2)
	list.add(1)
	console.log(list.size,list)

	let arr = [1,'2',1,3,3,2,5,6]
	let list2 = new Set(arr)
	console.log('unique',list2)
}
{
	let arr = ['add','delete','clear','has']
	let list = new Set(arr)

	console.log('has',list.has('add'))
	console.log('delete',list.delete('delete'),list)
	list.clear()
	console.log('list',list)
}
{
	let arr = ['add','delete','clear','has']
	let list = new Set(arr)

	for(let key of list.keys()){
		console.log('key',key)
	}
	for(let val of list.values()){
		console.log('val',val)
	}
	for(let val of list){
		console.log('val',val)
	}
	for(let [key,val] of list.entries()){
		console.log('entries',key,val)
	}

	list.forEach((item)=>{
		console.log('forEach',item)
	})
}

console.log('-----------weakSet--------')
{
	let weakList = new WeakSet();// 只能对象，且不检查是否引用过或废弃

	let arg = {}
	let obj = {a:1}
	weakList.add(arg)
	weakList.add(obj)
	// weakList.add(2); 出错，不可以

	console.log('weakList',weakList)
}

console.log('-----------map--------')
{
	let map = new Map();
	let arr = [123]

	map.set(arr,456)
	console.log('map',map,map.get(arr))
}
{
	let map = new Map([['a',123],['b',456]])

	console.log(map)
	console.log('size',map.size)
	console.log('delete',map.delete('a'),map)
	console.log('clear',map.clear(),map)

}
console.log('-----------WeakMap--------')
{
	let weakmap = new WeakMap();// 只能对象,不能遍历
}

{
	// 数据结构横向对比，增删改查
	let map = new Map()
	let arr = []
	// 增加
	map.set('t',1)
	arr.push({t:1})

	console.log('map-array-add',map,arr)
	// 查询
	let map_exist = map.has('t')
	let arr_exist = arr.find((item)=>item.t)
	console.log('map-array-find',map_exist,arr_exist)
	// 改
	map.set('t',2);
	arr.forEach(item=>item.t?item.t=2:'')

	console.info('map-array-modify',map,arr)

	// 删除
	map.delete('t')
	let index = arr.findIndex(item=>item.t)
	arr.splice(index,1)
	console.info('map-array-delete',map,arr)
}
{
	// set 和 array 对比
	let set = new Set();
	let array = []

	// 增加
	set.add({t:1})
	array.push({t:1})
	console.log('set-array-add',set,array)
	// 查询
	let set_exist = set.has({t:1})
	let arr_exist = array.find((item)=>item.t)
	console.log('set-array-find',set_exist,arr_exist)
	// 改
	set.forEach(item=>item.t?item.t=2:'')
	array.forEach(item=>item.t?item.t=2:'')
	console.log('set-array-modify',set,array)

	// 删除
	set.forEach(item=>item.t?set.delete(item):'')
	let index = array.findIndex(item=>item.t)
	array.splice(index,1)
	console.info('set-array-delete',set,array)
}
{
	let item = {t:1}
	let map = new Map()
	let set = new Set()
	let obj = {}

	// add 
	map.set('t',1)
	set.add(item)
	obj['t'] = 1

	console.log('add',map,set,obj)

	// find
	console.info({
		map_exist:map.has('t'),
		set_exist:set.has(item),
		obj_exist:'t' in obj
	})

	// change
	map.set('t',2)
	item.t = 2
	obj['t'] = 2
	console.log('change',map,set,obj)

	// delete 
	map.delete('t')
	set.delete(item)
	delete obj['t']
	console.log('delete',map,set,obj)
}









