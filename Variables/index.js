/*
EACH QUESTION HAS A TEST SECTION!
PLEASE DO NOT CHANGE OR TOUCH THEM THEY WILL CAUSE ERRORS ON
YOUR CONSOLE, BUT IT WILL NOT STOP THE REST OF YOUR CODE
ALL VARIABLES AND FUNCTION HAVE BEEN DECLARED FOR YOU!!!!
PLEASE ONLY TYPE WHERE 'YOUR CODE HERE' IS
*/

/*
EXAMPLE

ASSIGN the variable named myFirstVariable with a string value

*/

var exampleVariable;

exampleVariable = 'I am a string';


/*
QUESTION 1

ASSIGN the variable named myFirstVariable with the data type null

*/

var myFirstVariable;

myFirstVariable = null;

/*
QUESTION 2

ASSIGN mySecondVariable
Assign it to a BOOLEAN data type

*/

var mySecondVariable;

// YOUR CODE HERE
mySecondVariable = true;

/*
QUESTION 3

ASSIGN mythirdVar to equal to a string with the text ==>  hello world

*/

var myThirdVar;

// YOUR CODE HERE
myThirdVar = "hello world";

/*
QUESTION 4

ASSIGN myFourthVar to equal to a string with the text ==> This Is Case Sensitive

*/

var myFourthVar;

// YOUR CODE HERE
myFourthVar = `This Is Case Sensitive`;

/*
QUESTION 5

ASSIGN myAge to your age, use the number data type

*/

var myAge;

// YOUR CODE HERE
myAge = 20;

/*
QUESTION 6

REASSIGN myAgeCalc to your age. Please use 3 or more mathematical
operations
i.e. + - / *

*/

var myAgeCalc = null;

// YOUR CODE HERE
myAgeCalc = ((20 * 3) / 2) - 10;

/*
QUESTION 7 (THE LAST QUESTION)

HOW MANY EXPRESSIONS ARE THERE IN THIS STATEMENT
Assign a number value to numExpression
refer to lecutre about expressions

*/

(1 + 5) * 4;

var numExpression;

// YOUR CODE HERE
numExpression = 5;


/*
TEST SECTION, PLEASE DO NOT TOUCH

*/

const Mocha = require('mocha');

const runner = new Mocha({});

runner.addFile('./test.js');

runner.run((failures) => {
  // if (failures) {
  //   console.error(failures)
  // } else {
  //   console.log('All passed.')
  // }
});

module.exports = {
  exampleVariable,
  myFirstVariable,
  mySecondVariable,
  myThirdVar,
  myFourthVar,
  myAge,
  myAgeCalc,
  numExpression,
};

console.log('');
