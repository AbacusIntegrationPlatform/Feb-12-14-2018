/*
Implement two functions add and greatest that can take any number of arguments and print the sum and the largest. You can invoke them like this.

add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);

greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);

*/

//rest operator

const add = function(...numbers) {
	let sum = 0;
	for(let i=0; i<numbers.length; i++) {
		if(typeof(numbers[i]) == 'number') {
			sum += numbers[i];	
		}
	}
	console.log(`Sum: ${sum}`);
};

add(1,5,34,324,324,235,2353);
add(21,65);
add(1,55,83);

const greatest = function(...numbers) {
	let max = numbers.length > 0 ? numbers[0] : -1;
	for(let i=0; i<numbers.length; i++) {
		if(typeof(numbers[i]) == 'number') {
			max = numbers[i] > max ? numbers[i] : max;
		}	
	}
	console.log(`Max: ${max}`);	
};

greatest(1,5,34,324,324,235,2353);
greatest(21,65);
greatest(1,55,83,9,667);



