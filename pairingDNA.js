//Algorithm for DNA pairing


//input:String of characters. Will contain only ATCG, will only give one case. TEST cases set length, not required though.
//output:Array of DNA pairs. Dna pair = 2 char array. A<->T && C<->G, same length as input.
//example:  
//input: GCG  output: [[G,C],[C,G],[G,C]]
//1)(split the input string into string array.)Split input char array.

//working with single char
//2 firstChar = inputArray[0]
//3 check if firstChar is G
//		create pair [G,C]
//Else if first Char is C
//		create pair [C,G] 
//Else if firstChar is A
//		create pair [A,T]
//Else if firstChar is T
//		create pair [T,A]
//End if

//4 Add to strand variable.
//5 Repeat step 3 for additional chars.
//6 Return strand

function pairElement(str) {
 
    var strSplit = str.split("");
    var newArray = [];
	var currChar;
    for (var i = 0; i < strSplit.length ; i++) {
		currChar = strSplit[i];
		if ( currChar=== "G"){
			newArray.push(["G","C"]);
		}
		else if (currChar === "C") {
		   newArray.push(["C","G"]);
		}
		else if (currChar === "A") {
		   newArray.push(["A","T"]);
		}
		else if (currChar === "T") {
		   newArray.push(["T","A"]);
		} 
	}
	//console.log(newArray.toString());
	console.log(newArray);
	return newArray;

}

pairElement("GCG");
