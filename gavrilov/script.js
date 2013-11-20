var login = prompt("Введите логин:")
var inv = 0
if (login == "login") {
	verification:
	for (inv; inv<5; inv++) {
		var password = prompt ("Введите пароль ")
		if (password == "password") {
			alert ("Our secret");
			break 
		} else continue verification;		
	} 
	if (inv==5) {
		alert("Access denied")
	}
} else alert("Access denied")