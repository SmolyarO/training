window.onload = function () {
	var numbers = [3, 4, 5, 10, 12, 25, 27, 39, 50],
	i = 0,
	length = numbers.length;
	//this way
	for (i; i < length; i++) {
		if ((numbers[i] % 5) == 0) {
			console.log(numbers[i] + " is a Correct number");
		}
		else {
			console.log("Next number");
		}
	}
		//or this
		for (i; i < length; i++) {
		(numbers[i] % 5) == 0 ? console.log(numbers[i] + " is a Correct number") : console.log("Next number");
	}
	
}