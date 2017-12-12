//1)first character = "a"(first character of input)

//2)check if next letter is next in alphabet.
//	3)check if another letter availablego
//		4)go to next letter and repeat step 2
 //   5)else
//		6)return undefined
//7)else
//		8)return expected character
function fearNotLetter(str) {
 // var firstChar = str[0];
  //console.log(firstChar.charCodeAt(0));
  //console.log("char code of a:", "a".charCodeAt(0));
  for (var i = 0; i < str.length - 1; i++) {
    if (str.charCodeAt(i + 1) == str.charCodeAt(i)  + 1) {
      console.log("next char is next in aplhabet");  
    } else {
      //console.log("next char is not expected char");
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  } 
// console.log("hello");
 // return undefined;
  
}

console.log(fearNotLetter("abc"));
