document.body.onload = function() {
	document.getElementById('container').innerText = 'OLOLO';
}




//Замена текста в дивах
var cont = document.getElementById('container');
var links = cont.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
	links[i].href = "#";
}

var secCont = document.getElementById('secondContainer');

secCont.innerHTML = "<a href='http://yahoo.com'>Yahoo!</a>";



//Обращение к документу

var links = document.getElementsByTagName('a');
console.log(links);

for (var i = 0; i < links.length; i++) {
	links[i].href = "http://ya.ru";
	links[i].style.fontWeight = "bold";
	links[i].setAttribute("style","color: magenta; font-style: italic");
}

var para = document.getElementById('para');
para.innerHTML += " <a href='#'>newText</a>";
//para.innerText += "new text";


//Функция-часы

function goMad() {
	var interval = setInterval(sayDate, 1000);
}

function sayDate (){
	var current = new Date();
	document.body.innerHTML= "";
	document.write(current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds() + " " + current.getDate() + "." + current.getMonth() + " " + current.getFullYear() + " года");
}

goMad();



//Анонимные функции
timeout = setTimeout(function() {
	var current = new Date();
}, 10000);


timeout = setTimeout(foo, 10000); - функция вызывается без скобок, т.к. в противном случае передаётся не сама функция, а её значение

function foo() {}

//Функция запускает алерт каждые 3 секунды

function goMad() {
	var interval = setInterval(sayHi, 3000);
}

function sayHi (){
	alert("Привет!");
}



//00:00 01.03.2119 - вывод текущего времени

var current = new Date();
document.write(current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds() + " " + current.getDate() + "." + current.getMonth() + " " + current.getFullYear() + " года");


//Конструктор робота

function Robot(name) {
	var x = 0,
		y = 0;

	this.walkRight = function() {
		x++;
	}

	this.walkDown = function() {
		y++;
	} 

	this.getX = function() {
		return x;
	}

	this.getY = function() {
		return y;
	}

	this.name = name;

	return this; - всегда указывать в конце функции-конструктора
}

var wally = new Robot ("wall-e"),  -конструктор вызывается через new
	eve = new Robot ("eve");

wally.color = "gray";
wally.walkRight();
wally.walkRight();
wally.walkDown();

alert(wally.color);
alert(eve.color);

alert(wally.getX());
alert(wally.getY());

*/