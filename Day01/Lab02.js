/* Let's warm-up.
Create Lab02.js file. 
Implement the following and run it using Node.

1) Create an array that has the following key-values
name  Sam
age   12
country India
city Bengaluru

Iterate the array and print the array values in a  querystring format like this.

?name=Sam&age=12&country=India&city=Bengaluru
*/
let arr = [];
arr['name'] = 'Sam';
arr['age'] = 12;
arr['country'] = 'India';
arr['city'] = 'Bengaluru';

let queryString = '?';
for(let key in arr) {
	queryString += key + '=' + arr[key] + '&';
}
queryString = queryString.substring(0, queryString.length - 1);
console.log(queryString);















