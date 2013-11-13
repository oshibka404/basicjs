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
		password;
		
	login = prompt("login:");

	if (typeof login == "string" & login == "user"){
		password = prompt("password:");
		
		if (typeof login == "string" & password == "12345")
			alert("secret");
		else {
			alert("!ERROR password incorrect");
			return;
		}
	} else
		alert("!ERROR login incorrect");
};

avtorization();