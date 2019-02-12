let eat = function() {
	console.log("Eating");
}

eat();

work(eat);

function work(arg) {
	arg();
}

function confuse() {
	return function() {
		console.log("Scratching my head");
	};
}


/*
function doSomething(num) {
	
}
let i = 20;

doSomething(i);

function doSomethingElse() {
	let j = 120;
	return j;
}
*/