var login = prompt("Введите логин:")
var inv = 0
switch (login) {
	case "Виталька": 
	verification:
	for (inv; inv<5; inv++) {
		var password = prompt ("Введите пароль ")
		if (password == "vitaliwe") {
			alert ("Your secret");
			break 
		} else continue verification;		
	} 
	if (inv==5) {
		alert("Access denied")
	} break
	case "Админ": 
	verification:
	for (inv; inv<5; inv++) {
		var password = prompt ("Введите пароль ")
		if (password == "adminiwe") {
			alert ("ОМГ");
			break 
		} else continue verification;		
	} 
	if (inv==5) {
		alert("Access denied")
	} break
	case "Лалка": 
	verification:
	for (inv; inv<5; inv++) {
		var password = prompt ("Введите пароль ")
		if (password == "dniwe") {
			alert ("Access denied");
			alert ("Затралел)))) Так задумано, лалка");
			break 
		} else continue verification;		
	} 
	if (inv==5) {
		alert("Access denied")
	} break
 	default:
 		alert("Access denied")
 }