const repeatString = function(b, a) {
let c="";
if (a<0)
{
	return 'ERROR';
}
//here b==0 or b=='' or b==null works just fine 
if (b==null)
	{
		return '';
	}
for (i=0; i<a;i++)
	{
	c+=b;
	}
	return c;
};

// Do not edit below this line
module.exports = repeatString;
