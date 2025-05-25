const x = Number(process.argv[2]);

const factorial = function(x){
	if(x === 0 || x === 1){
		return 1;
	}

	let n = 1;
	for(i = 2; i <= x; i++){
		n *= i;
	}
	return n;
}
const n = factorial(x);
console.log(n);

