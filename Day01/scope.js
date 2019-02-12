//var is function scoped
//let is block scoped
//const is readonly and block scoped

let j = 12;
j = 'string';


msg = "confused"; //RECIPE FOR DISASTER

const TRUE = 1;
console.log(TRUE);

function doSomething(num) {
	{
		let i = 20;
	}
	console.log(i);
	if(num % 2 == 0) {
		let message = "Even";
	}
	else {
		let message = "Odd";
	}
	console.log(message);
}
doSomething(20);