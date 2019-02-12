/*
Implement the following
Create a class called Account that does the following.
1) It has an balance that needs to be initialized with a value greater than 10000
2) Methods to deposit, withdraw. If there isn't sufficient balance don't allow withdraw.
3) You can withdraw only 3 times. After that you will be charged 0.5% of the amount as Fees.
4) Method to print the statement. The statement shows the date, type of transaction(Deposit, Withdraw, Fees ...etc) and amount
5) Create an object of Account(20000) and call deposit twice and withdraw 5-6 times. Print the statement and Balance finally 

6) Create 2 or more Account objects and display the object count
*/

class Transaction {
	constructor(type, amount) {
		this.type = type;
		this.amount = amount;
		this.date = new Date();
	}
}

class Account {
	constructor(balance) {
		if(balance < 10000) {
			throw new Error("Initial balance cannot be lesser than 10000");
		}
		this.balance = balance;
		this.withdrawCount = 0;
		this.transactions = [];
	}
	
	deposit(amount) {
		this.balance += amount;
		this.transactions.push(new Transaction("Deposit", amount));
	}
	
	withdraw(amount) {
		this.withdrawCount += 1;
		this.balance -= amount;
		this.transactions.push(new Transaction("Withdraw", amount));
		if(this.withdrawCount > 3) {
			let fees = amount * 0.005;
			this.balance -= fees;
			this.transactions.push(new Transaction("Fee", fees));
		}
	}
	
	printStatement() {
		this.transactions.forEach(txn => console.log(`Amount: ${txn.amount}, (${txn.type} at ${txn.date.toString()})`))
	}
}

try {
	let acc = new Account(1000);
} 
catch (e) {
	console.log(`Error: ${e.message}`);
}
let account = new Account(20000);
account.deposit(1000);
account.deposit(1000);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(100);
account.withdraw(200);
account.printStatement();
console.log(`Balance: ${account.balance}`);



















