function spinalCase(str)
{
	var strJoin = "";
	var uppStr  = str.toUpperCase();
	var lowStr  = str.toLowerCase();
	console.log(str);
	
	for (var i = 0; i < str.length; i++)
	{
		if (i == 0)
		{
			strJoin = strJoin + lowStr[i];
			console.log(strJoin);
			continue;//skip other if statements and go to the next loop
		}
		if ((str[i] == uppStr[i]) || (str[i] == ' ') || (str[i] == '_'))//if str[i] is upper case or space or underscore just append a hypen to strJoin. 
		{
			strJoin = strJoin + "-";
			console.log(strJoin);
		}
		
		if ((str[i] != ' ') && (str[i] != '_'))//if str[i] is not space or not underscore return lower case
		{
			strJoin = strJoin + lowStr[i];
		}
		
	}
	console.log(strJoin);
	var res = strJoin.replace(/--/g, '-') ;//replace method is used to replace all occurances of "--" in the string.
	console.log(res);
	
	return res;
	
}
spinalCase("The_Andy_Griffith_Show");