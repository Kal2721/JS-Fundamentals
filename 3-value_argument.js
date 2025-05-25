const argument = process.argv;

if (argument.length > 2){
	console.log(argument[2]);
}else{
	console.log('No argument');
}
