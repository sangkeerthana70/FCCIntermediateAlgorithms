function diffArray(arr1, arr2) {
	var finalResult = [];
	for (var i=0; i<arr1.length; i++) {
		var currElem = (arr1[i]);
		console.log(currElem);
		if (arr2.indexOf(currElem)== -1) {//we are passing arr2(two numbers) as an element to compare with arr1.
			finalResult.push(arr1[i]);
		}
		
	}
	for (var i =0; i <arr2.length; i++) {
		var currElem2 = (arr2[i]);
		console.log(currElem2);
		if (arr1.indexOf(currElem2) == -1) {
			finalResult.push(arr2[i]);
		}
	}
	return finalResult;
}

console.log( diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));



