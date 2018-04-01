function myReplace(str, before, after) {
  var res = str.split(" ");
  var newArray = [];
  var i = 0;
  console.log(res);
	for(i=0; i< res.length; i++) {
		console.log(i);
		if (res[i] == before) {	//if the value jumped is matched in the string
			newArray.push(after);//replace it with the value of after.
		}
		else {
			newArray.push(res[i]);
		}
		console.log(newArray);
	}
  return newArray;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");