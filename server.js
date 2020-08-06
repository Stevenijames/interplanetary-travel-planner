require("dotenv").config();

function awesomeAdd(num1, num2) {
  return num1 + num2;
}

function awesomeSubtract(num1, num2) {
  return num1 - num2;
}

module.exports = { awesomeAdd, awesomeSubtract };