function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
	var i = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {			
            result += currNumber;
			console.log("Sum of odd number"+ i + "=" + result);
        }
		console.log("Loop count", i++);
        currNumber += prevNumber;
		console.log("current number" + currNumber);
        prevNumber = currNumber - prevNumber;
		console.log("previous number: " + prevNumber);
    }
	console.log(result);
    return result;
}
sumFibs(10);