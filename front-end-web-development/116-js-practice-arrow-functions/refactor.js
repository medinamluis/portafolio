// Before:
/*
const multiplyByTen = (num) => {
	return 10 * num;
}

const printToTen = () => {
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
}

const addUs = (num1, num2) => {
	console.log(num1 + num2);
}
*/

// After:

const multiplyByTen = num => 10 * num;

const printToTen = () => {          // can't be refactored anymore
	for (let i = 1; i <= 10; i++) {
		console.log(i);
	}
};

const addUs = (num1, num2) => console.log(num1 + num2);