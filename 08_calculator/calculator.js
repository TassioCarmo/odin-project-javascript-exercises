const add = function(num1,num2) {
  return num1 + num2;
	
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(args) {
  var sum = 0;
  if (args.length === 0){
    return sum;
  }else{
    for(var i = 0 ; i < args.length;i++){
      sum += parseInt(args[i]);
    }
    return sum;
  }

};

const multiply = function(args) {
  var mult = args[0];
	for(var i = 1 ; i < args.length;i++){
    mult *= args[i];
  }
    return mult;

};

const power = function(num1,num2) {
  return Math.pow(num1,num2);
};

const factorial = function(num) {

  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
	
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
