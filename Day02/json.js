// let person = { name: "Sam", age: 12 };
// console.log(typeof(person));


let name = "Sam";
let age = 12;

//Old style
let person = { name: name, age: age };

//ES6 style
let person2 = { name, age };
console.log(person2);

let car = { model: "BMW", year: 2018 };
//Old Style
// let model = car.model;
// let year = car.year;

//object destructuring
let { model, year, color } = car;
console.log(model, year, color);

//Array destructuring
let arr = [1, 2];
let [x, y] = arr;
console.log(x, y);



