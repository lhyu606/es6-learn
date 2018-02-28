{
	// 基本定义
	let ajax = (callback)=>{
		console.log('执行')
		setTimeout(()=>{
			callback&&callback.call()
		},1000)
	}
	ajax(()=>{
		console.log('timeout')
	})
}
{
	let ajax = ()=>{
		console.log('执行2')
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve()
			},1000)
		})
	}

	ajax().then(()=>{
		console.log('Promise','timeout2')
	},()=>{
		console.log('reject')
	})
}
{
	let ajax = ()=>{
		console.log('执行333---1')
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve()
			},1000)
		})
	}

	ajax().then(()=>{
		console.log('执行333---2')
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				resolve()
			},2000)
		})
	}).then(()=>{
		console.log('执行333---3')
	})
}
{
	let ajax = (num)=>{
		console.log('执行4444--1')
		return new Promise((resolve,reject)=>{
			if(num>5){
				resolve()
			}else{
				throw new Error('出错了....')
			}
		})
	}

	ajax(6).then(()=>{
		console.log('66666')
	}).catch((err)=>{
		console.log('catch',err)
	})
	ajax(4).then(()=>{
		console.log('66666------2222')
	}).catch((err)=>{
		console.log('catch',err)
	})
}
{
	// 所有图片加载完再添加到页面
	function loadImg (src) {
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img');
			img.src = src;
			img.onload = function (){
				resolve(img)
			}
			img.onerror  = function (err){
				reject(err)
			}
		})
	}
	function showImgs(imgs){console.log('over')
		imgs.forEach((img)=>{
			document.body.appendChild(img)
		})
	}
	Promise.all([
		loadImg('http://i4.buimg.com/567571/dflef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
		loadImg('')
	]).then(showImgs)
}

{
	// 有一个图片加载完就添加到页面
	function loadImg (src) {
		return new Promise((resolve,reject)=>{
			let img = document.createElement('img');
			img.src = src;
			img.onload = function (){
				resolve(img)
			}
			img.onerror  = function (err){
				reject(err)
			}
		})
	}
	function showImg(img){
		let p = document.createElement('p');
		p.appendChild(img);
		document.body.appendChild(p)
	}
	Promise.race([
		loadImg('http://i4.buimg.com/567571/dflef0720bea6832.png'),
		loadImg('http://i4.buimg.com/567571/2b07ee25b08930ba.png'),
		loadImg('')
	]).then(showImg)
}














