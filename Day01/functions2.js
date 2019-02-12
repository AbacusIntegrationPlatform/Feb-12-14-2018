//Function hoisting

work();

function work() {
	console.log("Eating");
}

work(12);
work();
function work(duration) {
	console.log("Eating lot");
}

work(24, 7);
function work(a, b) {
	console.log("Eating all the time");
}

work(24, 7, 365, "days");
work();

