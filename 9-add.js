const x = Number(process.argv[2]);
const y = Number(process.argv[3]);

const calcAdd = function(x, y){
	let add = x + y;
	return add;
}

const add = calcAdd(x, y);
console.log(add);
