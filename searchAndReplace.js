/*
Pseudocode
Step-1 Split the incoming string into an array by using the str.split(" ") method using space as the delimiter to space the array elements.
Step-2 Declare a variable newArray.
Step-3 Declare two more variables newStr (to output the final string) and afterWord ( to convert the first letter of the after word from the parameter).
Step-4 Iterate through the loop of every[i] th element to see if the before value in the parameter matches the after value in the parameter.
Step-5 Inside the for loop we check if (currWord == before)
Step-6 Inside the if loop we check if the first letter in the currWord is upperCase, if it is upper case then 
do the upper casing to the first letter in the after parameter and concatenate with the rest of the letters in the after.  
	Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
	Else  dont do anything just push the word into a new array.
Step-7 newArray.push(afterWord); which means we push every element in the array through the for loop into a new array.
Step-7 newArray.join(' ') Finally we convert it back into a string after replacing the before with the after.
Step-8 return the newStr.*/

function myReplace(str, before, after) {
  var res = str.split(" ");
  var newArray = [];
  var newStr;
  var afterWord;
  var i;
  console.log(res);
	for(i=0; i< res.length; i++) {//note that after you convert the string into an array every [i]th element will be a string. So to get the first letter in the [i]th element we do a substring(0,1) starting from position 0 and get the rest of the letters in the string.
		console.log(i);
		var currWord = res[i];//assigning [i]th element to currWord
		console.log(currWord);
		if (currWord == before) {	//if the value of before parameter is matched in the string
			if (currWord.substring(0,1) == currWord.substring(0,1).toUpperCase()) {//note that substring(0,1) means starting from position 0 and the rest of the letters in the string.
				afterWord = after.substring(0,1).toUpperCase() + after.substring(1);
				newArray.push(afterWord);
				console.log(currWord);
			}
			else {
				newArray.push(after);//replace it with the value of after.
			}
				
			
		}
		else {
			newArray.push(res[i]);
		}
		console.log(newArray);
		
	}
	newStr = newArray.join(' ');
  return newStr;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");