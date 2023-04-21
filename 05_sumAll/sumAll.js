const sumAll = function(a,b) {
	let sum=0;
	let c=(a<b)? a:b;
	let d=(a<b)? b:a;
	if ((Number.isInteger(a) && Number.isInteger(b))&& (a>=0 &&b>=0)){
	for(let i=c;i<=d;i++)
		{
			sum=sum+i;
		}
		return sum;}
	else
	{
	    return "ERROR"
	}

};
console.log(sumAll(123, 1));


// Do not edit below this line
module.exports = sumAll;
