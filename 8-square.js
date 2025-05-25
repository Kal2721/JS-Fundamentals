const x = Number(process.argv[2]);
const str = "x";

const printSquare = function(x){
	for(let j = 0; j > x; j++){
		let row = "";
		for(let i =0; i < x; i++){
			let row += "x";
		}
			console.log(row);
	}
}
printSquare(x);

