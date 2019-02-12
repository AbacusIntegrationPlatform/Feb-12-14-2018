//$("#username").val()
//$("#username").val("admin")


function eat(item) {
	//console.log(`Eating ${item}`);
	for(let i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
	console.log();
}

eat("Roti");
eat("Rice", "Bread");
eat(false);
eat("Rice", "Roti", "Dosa", "Icecream");
eat(6, "times", "a", "day", 24, 7);
eat();