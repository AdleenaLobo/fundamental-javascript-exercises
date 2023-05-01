const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	const sumed=arr.reduce((total,element)=>total+element,0);
	return sumed;

	
};

const multiply = function(arr) {
	const multiplied=arr.reduce((begin,element)=>begin*element,1);
	return multiplied;
};

const power = function (a,b) {
return Math.pow(a,b);
};

const factorial = function(a) {
	let test=1; 
	for (i=a; i>0;i--)
		{
			test*=i;
		}
		return test;
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
