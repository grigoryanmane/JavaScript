module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	},
	printElements: function (array) {
		if (array.length === 0) {
			console.log("No prime numbers in between");
		} else {
			for (let i = 0; i < array.length; i++) {
				console.log(array[i]);
			}
		}

	}
}
