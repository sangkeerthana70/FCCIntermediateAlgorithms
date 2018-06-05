function dropElements(arr, func) {
	var index;
	var outputArr = [];
	for (var i = 0; i < arr.length; i++)
	{
		
		if (func(arr[i]) == true)
		{
			index = i;
			console.log(i);//indicates the index at which the condition inside the function is met.
			break; 
		}
	}
	for (var i = index; i < arr.length; i++)//starting from the above index (in if statement)push all elements to the output array.
	{
		outputArr.push(arr[i]);
		console.log(outputArr);		
	}
	return outputArr;
	
}
dropElements([1, 2, 3], function(n) {return n < 3; });