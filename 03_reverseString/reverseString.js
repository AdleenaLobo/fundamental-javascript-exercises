const reverseString = function(a) {
let b='';
let c= a.length;
for (i=c-1;i>=0;i--)
	{
		b+=a.charAt(i);
	}
	return b;
};

// Do not edit below this line
module.exports = reverseString;
