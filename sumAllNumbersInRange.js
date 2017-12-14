function sumAll(arr) {
  var min = Math.min(arr[0], arr[1]);
  console.log("min is",min);
  var max = Math.max(arr[0], arr[1]);
  console.log ("max is",max);
  var result = 0;
	for (var i=min; i <=max; i++) {
    result = result + i;
    console.log("result",result);
  }
  return result;
}
sumAll([10,5]);