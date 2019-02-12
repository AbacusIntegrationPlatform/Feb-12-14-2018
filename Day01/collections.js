let arr = [];
let numbers = [1, 2, 3, 4, 5];
let collections = [1, true, 23.345, "string"];


for(let i=0; i < numbers.length; i++) {
	console.log(numbers[i]);
}
let countries = [];
countries["India"] = "New Delhi";
countries["USA"] = "Washington DC";
countries["France"] = "Paris";

for(let item in countries) {
	console.log(item + ": " + countries[item]);
}