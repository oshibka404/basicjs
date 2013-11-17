/*
g = "global";
var str = "str",	// local
	
	n = str - 1,	// NAN != itself, 0, infinity - strong tipization
	
	iP = 1/0,		// infinity
	iM = -iP,
	
	nan = iP - iP;	// iP +/- iM

var somevar;		// undefined: not contain nothing
var nullvar = null;	// contain nothing

alert(str);
alert(n);
alert(nan);
alert(iP);
alert(iM);
alert(somevar);
alert(nullvar);

console.log(n==0);
console.log(n==n);

var s = prompt("how are you?");
alert("you are " + s);

var s = "100";
var s2 = 5;

alert(parseInt(s) + 5);
alert(s + s2);

alert(typeof null);
alert((100).toString().length);

var age = prompt("How old are you?");
alert(typeof age);
if (age < 18)
	alert("you'll not pass");
else if(age === "18")
	alert("you are 18");
*/

function avtorization() {
	var login,
		password,
		count = 0;
		
	login = prompt("login:");
	
	if (login == "manager" || login == "developer" || login == "user") {
		while (password != "12345" && ++count <= 5)
			password = prompt("password:");
			
		if (password == "12345")
			switch (login)
			{
				case "manager":
					alert("big secret");
					break;
				case "developer":
					alert("medium secret");
					break;
				case "user":
					alert("small secret");
					break;
			}
		else
			alert("!ERROR: password incorrect");
	} else
		alert("!ERROR: login incorrect");
};

avtorization();