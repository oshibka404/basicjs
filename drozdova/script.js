var login="Mod";
var password="qwerty123";
var i = 0;
var userlogin=prompt("Введите логин");
if (login==userlogin) {};
while (userpassword!=password && i<5) {
var userpassword=prompt("Введите пароль");
i++;
};
if (password==userpassword) {
alert("секретная инфа: логин " + login + ", пароль " + password);
};
