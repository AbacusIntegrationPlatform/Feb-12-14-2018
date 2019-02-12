//1
function eat1(item) {
	return `Eating: ${item}`;
}

//2
const eat2 = function(item) {
	return `Eating: ${item}`;
}

//3
const eat3 = item => `Eating: ${item}`;

console.log(eat3('Roti'));
