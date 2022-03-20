// jshint esversion: 8
/*
 * Adds two values
 */
function addTwoValues(a, b) {
    return a + b;
  }

// Function to test in case an error is thrown
function addTwoValuesSafe(a, b) {
    if (("number" != typeof a) || ("number" != typeof b)) throw new Error("Input argument is not a valid number");
    return addTwoValues(a, b);
  }

if (typeof module !== 'undefined') module.exports = {addTwoValues, addTwoValuesSafe};