/*
Here's a small exercise that will help you get accustomed to arrow functions and functional style coding in JavaScript. As ReactJS developers you will follow this style extensively.

Create an array of numbers 1,2,3,4,5,6,30,56,84,23,100
Implement the following in a functional style using arrow functions

1) Print all the numbers
2) Print the sum of all numbers
3) Print the first odd number
4) Generate an list of squares of all numbers
5) Generate a list of numbers divisible by 5. 
6) Print all the even numbers

Hint:
1) Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Here's how you implement (1) without and with using arrow functions

var numbers = [1,2,3,4,5,6,30,56,84,23,100];
numbers.forEach(function(num) {
	console.log(num);
}); 
numbers.forEach((num) => console.log(num)); 
*/

let numbers = [1, 2, 3, 4, 5, 6, 30, 56, 84, 23, 100];

//Print all the numbers
numbers.forEach(n => console.log(n));

//Print the sum of all numbers
const sum = numbers.reduce((first, next) => first + next)
console.log(`Sum: ${sum}`);


//Print the first odd number
const firstOddNumber = numbers.find(n => n % 2 != 0);
console.log(`First odd number: ${firstOddNumber}`);

//Generate an list of squares of all numbers
numbers.map(n => n * n)
	   .forEach(n => console.log(n));

//Generate a list of numbers divisible by 5.
const list = numbers.filter(n => n % 5 == 0)
console.log(`List of numbers divisible by 5: ${list}`);	   

//Print all the even numbers
numbers.filter(n => n % 2 == 0)
	   .forEach(n => console.log(n));

	   	    
















