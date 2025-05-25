const x = process.argv[2];

let string = "C is fun";

const repeat = function(str, x){
	for(let y = 0; y < x ; y++){
		console.log(string);
	}
}
repeat(string, x);

console.log('Missing number of occurrences');
