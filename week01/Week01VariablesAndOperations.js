/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  Variables and Operations Lab
  FE 01 Lab  
*/

/** Key Terms:
 *  JavaScript
 *  GUI (Graphic User Interface)
 *  CLI (Command Line Interface)
 *  Variable
 *  Data Types:
 *   - String
 *   - Number
 *   - Boolean
 *   - Array
 *   - Undefined
 *   - Object
 *   - BigInt
 *   - Null
 *   - Symbol
 *  Method
 *  Git
 *  Source Control
 *  Operators
 *  console.log()
 * 
*/

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so. 
// Read the comments and add your code where it is specified for each question. 
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 1. Creating & 'console.log()'ing variables \n`);

/**
 * Instruction: Create a variable for each step, then print that variable 
 *              to the console in the correct section.
 *
 * Step 1: Create a variable to hold the quantity of available seats left on a flight.
 * Step 2: Create a variable to hold the cost of groceries at checkout
 * Step 3: Create a variable to hold a person's middle initial
 * Step 4: Is it Hot Outside?
 *         Create a variable to hold a boolean, true if it's hot outside, false if it's not hot outside.
 * Step 5: Create a variable to hold a customer's first name.
 * Step 6: Create a variable to hold a street address.
 * ↓ YOUR CODE HERE ↓ */

var availPlaneSeats = 23;
console.log("Step 1:  Number of Seats on a Plane");
console.log("There are " + availPlaneSeats + " seats left on the plane.");

var costOfGroceries = 125.63;
console.log("Step 2:  Cost of Groceries");
console.log("Can you believe the groceries cost $" + costOfGroceries + "?");

var midInit = "A";
console.log("Step 3:  Middle Initial");
console.log("Her middle initial is " + midInit + ".");

var isItHotOutside = true;
console.log("Step 4:  Is it Hot Outside?");
console.log("It is " + isItHotOutside + " that it is hot outside.");

var custFirstName = "Carole";
console.log("Step 5:  First Name");
console.log("Her first name is " + custFirstName + ".");

var streetName = "123 Main Street";
console.log("Step 6:  Street Address");
console.log("She lives at " + streetName + ".");

/*-------------------------------------------------------*/

console.log(`--------------------------
Question 2. Creating & 'console.log()'ing variables \n`);


/** 
 * Instruction: Use the variables we just created to solve the problems below.
 *              Print your answers to the console.
 * 
 *
 * */

console.log('Remove Plane Seats:')
//	A customer booked 2 plane seats. Remove 2 seats from the available seats variable
//  ↓ YOUR CODE HERE ↓
availPlaneSeats -= 2;
console.log("Two more seats were sold and there are now " + availPlaneSeats + " seats left.");

console.log('Buy a Candy Bar:')
//	Impulse candy bar purchase! Add 2.15 to the grocery total
//  ↓ YOUR CODE HERE ↓
costOfGroceries += 2.15;
console.log("The cost of groceries increased to $" + costOfGroceries + " because you couldn't resist the Watchamacallit" + ".");

console.log('Fix a Birth Certificate:')
//	A birth certificate was printed incorrectly, change the middle initial to something else
//  ↓ YOUR CODE HERE ↓
midInit = "L";
console.log("There was an error on her birth certificate. Her middle initial was changed to " + midInit + ".");

console.log('Changing Seasons:')
//	The season has changed, update the hot outside variable	to be opposite of what it was
//  ↓ YOUR CODE HERE ↓
isItHotOutside = "false";
console.log("It is now winter and it is " + isItHotOutside + " that it is hot outside" + ".");

console.log('Full Name:')
//	Create a new variable called full name using the customer's
//  first name, the middle initial, and a last name of your choice
//  ↓ YOUR CODE HERE ↓
var fullName = custFirstName + " " + midInit + " " + "Tierney";
console.log("Her full name is " + fullName + ".");

console.log('Introduce a Customer:')
//	Print a line to the console that introduces the customer 
//	including the name, and saying that they live at the address variable
//  ↓ YOUR CODE HERE ↓
console.log("This is " + fullName + " and she lives at " + streetName + ".");

console.log('-----------Finished------------')