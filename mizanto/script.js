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


valid_login = "user";
valid_password = "password";
secure_message = "СУПЕРСЕКРЕТНАЯИНФОРМАЦИЯ";

var login = prompt("Введите имя пользователя: ");

if (login == valid_login) {
	var password = prompt("Введите пароль: ");
	if (password == valid_password) {
		alert(secure_message);
	} else {
		alert("Вы ввели неверный пароль.");
	}
} else {
	alert("Вы ввели неверное имя пользователя.");
}
