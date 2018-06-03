function steamrollArray(arr) 
{
	var currElem;
	var outArray = [];
	for (var i=0; i<arr.length; i++)
	{
		currElem = arr[i];
		console.log("currElem = ",currElem);
		if (Array.isArray(currElem)) 
		{
			//console.log(i,"th element is array",currElem);
			flatten(currElem,outArray);
		}
		else
		{
			//console.log(i,"th element is not array",currElem);
			outArray.push(currElem);
		}
		console.log("outArray = ",outArray);
	}
	return outArray;
}

function flatten(input,output)
{
	for (var i=0; i<input.length; i++)
	{
		var currElem = input[i];
		if (Array.isArray(currElem))
		{
			flatten(currElem,output);
		}
		else
		{
			output.push(currElem);
		}
	}
}

steamrollArray([1, [2], [3, [[4]]]]);