
/*
1-divide input by 1000 take the quotient and assign it to m. 
2-mod = input % 1000;
3-divide the mod in step-2 by 100 EG:355/100 = 3
4-using the result(Quotient) retrieve corresponding element from the hundreds array unless the result is 0.If quotient is 0  look in the other two arrays.
5-mod the original number by 100 Eg:355%100 = 55(remainder)
6-divide result(remainder) from step-5 by 10 EG:55/10 = 5.
7-using that result retrieve corresponding element from 10's array
8-using result from step-5 mod it by 10.EG:55%10 = 5.
9-using result from step-8 retrieve corresponding element from 1's array.*/

var arr1 = ['I', 'II', 'III', 'IV', 'V', 'VI','VII', 'VIII', 'IX'];
var arr10 = ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
var arr100 = ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
function convertToRoman(num)
{
	var lookup = "";
	var lookup1 = "";
	var lookup2 = "";
	var thouArr = "";
	var thou = Math.floor(num /1000);//calculate thousands in input
	console.log(thou);
	for (var i = 0; i < thou; i++)
	{
		thouArr = thouArr + 'M';
		
	}
	console.log(thouArr);
	var modThou = num % 1000;//mod input to get the element in string
	console.log(modThou);
	var div1 = Math.floor(modThou / 100);
	console.log(div1);

	if (div1 != 0) 
	{
		lookup = arr100[div1-1];
		console.log(lookup);
	}
	var hVal = num % 100;//calculate the hundreds in input.
	console.log(hVal);
	var hArrElem = Math.floor(hVal/10);//use this result to retrieve the elem from 10's array
	console.log(hArrElem);
	//retrieve elem based on the index from the (haret) above variable 
	if (hArrElem != 0)
	{
		lookup1 = arr10[hArrElem-1];
		console.log(lookup1);
	}
	var oArrElem = hVal % 10;//calculate 	the tens in input.
	console.log(oArrElem);
	if (oArrElem != 0)
	{
		lookup2 = arr1[oArrElem-1];
		console.log(lookup2);
	}
	var Fresult = thouArr + lookup + lookup1 + lookup2;
	console.log(Fresult);
	return Fresult;
	
}
convertToRoman(83);