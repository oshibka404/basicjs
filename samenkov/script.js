var a = prompt("Login?");
if (a == "123")
{
	var i = 0;
	while (i < 5)
	{
		var b = prompt('Password?');
  		if (b == "123") break;
		i++;
		alert("Invalid Password. Try again")
	}
if (b == "123") 
{
alert('All right')
}
else 
{
	alert('Ошибка авторизации')
}
}
else 
{
	alert('Ошибка авторизации')
}