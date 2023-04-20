const removeFromArray = function(a,...b) {
	let counter=0;
	for (i=0;i<a.length;)
		{
					for(const d of b)
				{
					if(a[i]===d)
						{
							a.splice(i,1);
							counter=1;
						}
						else
							{counter=0;}
				}
				if (counter==0)
					{
						i++;
					}
		}
return a;
};

// Do not edit below this line
module.exports = removeFromArray;
