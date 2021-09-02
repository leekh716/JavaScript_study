'use strict';

function calculate(command, a, b){
	switch (command)
	{
		case 'add':
			console.log(a + b);
			break;
		case 'subtract':
			console.log(a - b);
			break;
		case 'multiply':
			console.log(a * b);
			break;
		case 'divide':
			console.log(a / b);
			break;
		case 'remainder':
			console.log(a % b);
			break;
		default:
			console.log('wrong command!');
	}
}

calculate('add', 1, 2);
