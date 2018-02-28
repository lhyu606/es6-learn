{
	console.log(0b1111);
	console.log(0o17);
	console.log(0xF);
}
{
	console.log('15',Number.isFinite(15));
	// console.log('\'15\'',Number.isFinite('15')); //false
	console.log('NaN',Number.isFinite(NaN));
	console.log('1/0',Number.isFinite(1/0));

	console.log('15',Number.isNaN(15));
	console.log('\'15\'',Number.isNaN('15'));
	console.log('NaN',Number.isNaN(NaN));
}
{
	console.log('15 isInteger:',Number.isInteger(15));
	console.log('15.0 isInteger:',Number.isInteger(15.0));
	console.log('15.1 isInteger:',Number.isInteger(15.1));
	console.log('\'15\' isInteger:',Number.isInteger('15'));
}
{
	console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);

	console.log('isSafeInteger(10)',Number.isSafeInteger(10));
	console.log('isSafeInteger(a)',Number.isSafeInteger('a'));
}
{
	console.log('Math.trunc(4.2)',Math.trunc(4.2));
	console.log('Math.trunc(4.9)',Math.trunc(4.9));
}
{
	console.log('是否正值，Math.sign(-5)',Math.sign(-5));
	console.log('是否正值，Math.sign(0)',Math.sign(0));
	console.log('是否正值，Math.sign(5)',Math.sign(5));
	console.log('是否正值，Math.sign(\'-5\')',Math.sign('-5'));
	console.log('是否正值，Math.sign(a)',Math.sign('a'));
}
{
	console.log('-1 立方根',Math.cbrt(-1));
}




