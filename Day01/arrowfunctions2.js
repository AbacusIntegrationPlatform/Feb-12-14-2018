// let random = function() {
// 	return Math.round(Math.random() * 100);
// }

let random = () => Math.round(Math.random() * 100);
console.log(random());


let isOddOrEven = (num) => {
	if(num % 2 == 0) {
		return "Even";
	}
	else {
		return "Odd";
	} 	
};