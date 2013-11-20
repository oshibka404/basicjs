// var s = prompt("как дела?"); // confirm()
// alert("у тебя всё " + s);

/*
var a = "123",
	b = "96";

alert(typeof a);

alert(parseInt(a) + parseInt(b));
*/

/*
var age = prompt("Введите свой возраст: ");

if (age < 18) {
	alert("Уходи!");
}
*/


valid_user_login = "user";
valid_admin_login = "admin";
valid_guest_login = "guest";

valid_password = "password";
secure_message = "СУПЕРСЕКРЕТНАЯИНФОРМАЦИЯ";

var login = prompt("Введите имя пользователя: ");

switch (login) {

	case valid_user_login:
	passvordValidation();
	break;

	case valid_admin_login:
	passvordValidation();
	break;

	case valid_guest_login:
	passvordValidation();
	break;

	default:
	alert("Вы ввели неверное имя пользователя.");
}

function passvordValidation() {
	var password = prompt("Введите пароль: ");
	if (password == valid_password) {
		alert(secure_message);
	} else {
		alert("Вы ввели неверный пароль.");
	}
}
