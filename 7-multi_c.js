const x = Number(process.argv[2]);

let string = "C is fun";

const repeat = function(str, x){
	Array.from({ length : x }).forEach(() => {
		console.log(str);
	});
}
repeat(string, x);

while(!x){
	console.log('Missing number of occurrences');
	break;
}
