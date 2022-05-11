const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numArray) {
	let result = 0;
  while(numArray.length!==0) {
    result+=parseInt(numArray.pop());
  }
  return result;
};

const multiply = function(numArray) {
	let result = 1;
  while(numArray.length!==0) {
    result*=parseInt(numArray.pop());
  }
  return result;
};

const power = function(num,power) {
	let result=num;
  for(let i=1;i<power;i++){
    result*=parseInt(num);
  }
  return result;
};

const factorial = function(num) {
  let result=1;
	for(let i=2;i<=num;i++) {
    result*=i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
