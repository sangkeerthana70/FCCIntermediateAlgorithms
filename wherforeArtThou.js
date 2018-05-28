/*
step-1 calculate the keys for the second parameter(source) using Object.keys(source). This will return an array of all keys in the source object.Store this array in a variable called var keys EG: var keys = ["a", "b"]
step-2 iterate through the array of first parameter(collection)
step-3 since the keys itself is an array compare the first value of keys with the collection's currentObject in loop for each inner loop iteration.
step-4 if match is found for comparing {{source[currKey] != currObj[currKey]}} push the collection object in the var arr.EG:
0:{a: 1, b: 2}
1:{a: 1, b: 2, c: 2}
step-5 if no match break.

*/


function whatIsInAName(collection, source)
 {
	var arr = [];
	var currObj;
	var keys = Object.keys(source);//Object.keys will return the keys in an object as an array
	console.log(keys);
	var match;
	for (var i = 0; i < collection.length; i++)
	{
		currObj = collection[i];//{ "a": 1, "b": 2 }
		
		match = true;
		for (var j = 0; j < keys.length; j++)
		{
			var currKey = keys[j];//a
			
			if (source[currKey] != currObj[currKey])//{ "a": 1, "b": 2 }
			{
				match = false;
				break;
			}
		}
		if (match)
		{
			arr.push(currObj);
		}
	}
	return arr;
 }
 
 whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });