require("dotenv").config();

function awesomeAdd(num1, num2) {
  return num1 + num2;
  console.log("awesome add!!!");
}

module.exports = { awesomeAdd: awesomeAdd }