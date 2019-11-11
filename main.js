const util = require("./myUtils.js");
const reader = require("readline-sync");
let number1 = reader.questionInt("First Number ");
let number2 = reader.questionInt("Second Number ");

function primesInBetween(num1, num2) {
    if (num1 > 0 && num2 > 0) {
        let primesArray = [];
        for (let i = num1; i <= num2; i++) {
            if (util.isPrime(i)) {
                primesArray.push(i);
            }
        }
        return primesArray;
    }
    return "Please insert only positive values";
}

let result = primesInBetween(number1, number2);
if (typeof result == "string") {
    console.log(result);
} else {
    util.printElements(result);
}
console.log(util.isPrime(2));

