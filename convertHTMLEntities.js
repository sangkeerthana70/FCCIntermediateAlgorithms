function convertHTML(str) {
  var newStr = str.split("");
  console.log(newStr);
  var reStr;
  var i;
  var newArray = [];
	for (i = 0; i <newStr.length; i++) {
	  var strElem = newStr[i];
	  console.log(strElem);
	  var matchCode = str.charCodeAt(i);
	  console.log(matchCode);
	  switch (strElem) {
		case '&' :
			strElem = '&amp;';
			break;
		case '<' :  
			strElem = '&lt;';
			break;
		case '>' :
			strElem = '&gt;';
			break;
		case '"':
			strElem = '&quot;';
			break;
		case "'":
			strElem = '&apos;';
			break;
	  }	
		newArray.push(strElem);
	    //console.log(newArray);
    }
	reStr = newArray.join('');
	console.log(reStr);
	return reStr; 
}	

convertHTML("Hamburgers < Pizza < Tacos");
