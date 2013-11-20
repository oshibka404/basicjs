//00:00 01.03.2119 

var current = new Date();
document.write(current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds() + " " + current.getDate() + "." + current.getMonth() + " " + current.getFullYear() + " года");

/*

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