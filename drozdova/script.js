var login="Mod";
var password="qwerty123";
var i = 0;
var userlogin=prompt("Введите логин");
if (login==userlogin) {
var userpassword=prompt("Введите пароль")};
while (userpassword!=password && i<4) {
var userpassword=prompt("Введите пароль");
i++;
};
if (password==userpassword) {
alert("секретная инфа: логин " + login + ", пароль " + password);
};
