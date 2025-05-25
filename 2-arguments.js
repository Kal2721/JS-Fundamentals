

const argument = function(process.argv){
	switch(argument.length){
		case 0:
			console.log('No argument');
			break;
		case 1:
			console.log('Argument found');
			break;
		default:
			console.log('Arguments found');
	};
}

argument();
