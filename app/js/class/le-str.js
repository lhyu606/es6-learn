let s = '';
s.charCodeAt(0);
s.codePointAt(0);
s.codePointAt(0).toString(16);

String.fromCharCode('0x20BB7');
String.fromCodePoint('0x20BB7');

// 遍历字符串
let str = '\u{20BB7}abc';

for (let code of str) {
	console.log(code);
};
{
	let str ='string';
	str.includes('ing');// true
	str.startsWith('str')
	str.endsWith('ng')
	let str2 = str.repeat(2);// 'stringstring'
}
{
	let s1 = 'hello'
	let s2 = 'war'
	let str = `${s1},${s2}`
}
{
	let str = '1';
	let num1 = str.padStart(2,'0');
	let num2 = str.padEnd(2,'0');
}
