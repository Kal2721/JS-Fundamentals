const x = Number(process.argv[2]);

const printSquare = function(x){
	Array.from({ length : x }).forEach(() =>{
		let row = "";
		for(let i =0; i < x; i++){
			row += "X";
		}
			console.log(row);
	});
}
printSquare(x);

while(!x){
	console.log('Missing size');
	break;
}
