var login = prompt("Введите логин");

if (login == "qwerty") {

	var pass = prompt ("Введите пароль");
	if (pass == "qwerty") {
		alert("Суперсекретная инфа");
	}
	else {
		alert("Неверный пароль!")
	}
}
else {
	alert("Неверный логин!")
}







/*var age = prompt("Сколько тебе лет?"); вывод поля для ввода/записи строки
	alert(typeof age);
	if (age == 18) {
		alert('Тебе восемнадцать!')
	}

логические операции

console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log( ~a);
	
	


alert(("String").length);
	alert((43).toString());

alert(parseInt(a) + parseInt(b)); /// вычленяет число из строки
alert(typeof null); //вернет object
alert(a - b);
alert(a % b); // остаток от деления


var s = prompt("Как у тебя дела? ");

	alert("У тебя всё " + s);

var s = "колбаса",
	t = s - 1,
	i = 1/0,
	i2 = -i;
	
var nan = i-i;

var somevar = null;

console.log(somevar);

console.log(nan);

s = 4;
alert(s);
alert(t);    
alert(i);
alert(i2); 

console.log(t == 0);
console.log(t == t);
console.log(t > 0);
console.log(t < 0);

console.log(s);
foo();
function foo() {
	var s = "in function";
}

alert(s); 
*/