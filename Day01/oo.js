class Person {
	
	constructor(name, age) {
		this.name = name;
		this.age = age;	
		//var firstName = name;
	}
	
	work(hours) {
		this.salary = 10000;
		console.log(`${this.name} works ${hours} hours`);
	}
}

class Engineer extends Person {
	constructor(name, age, salary) {
		super(name, age);
		this.salary = salary;
	}
	work(hours) {
		super.work(hours);
		console.log(`Engineer ${this.name} works ${hours} hours`);
	}
}
let e2 = new Engineer("Ram");
console.log(e2.name, e2.age);
let e1 = new Engineer("Sam", 24, 10000);
e1.name = "Thomas";
e1.work(14);

// let p1 = new Person("Sam", 12);
// console.log(p1.name, p1.age);
// console.log(p1.firstName);
// p1.work(12);
// console.log(p1.salary);