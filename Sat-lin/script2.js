
var myDate = new Date();
myDate.setHours(00);
myDate.setSeconds(0);
myDate.setMinutes(0);

function eggs_smash(){
myDate.setMinutes(2);
myDate.setSeconds(2);
setInterval(timer,1000);
}

function eggs_hard(){
myDate.setMinutes(10);
myDate.setSeconds(2);
setInterval(timer,1000);
}

function pelmeni(){
myDate.setMinutes(20);
myDate.setSeconds(0);
setInterval(timer,1000);
}


function timer(){
if(myDate.getMinutes()!=0 || myDate.getSeconds()!=0){	
	document.getElementById('timer').style.color = '#000';
	myDate.setSeconds(myDate.getSeconds() -1);}
else{
	document.getElementById('timer').style.color = 'red';	
	}
document.getElementById('timer').innerHTML = myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds();
}


// lesson 3
// граматика общие правила

// посмотреть конструкторы
/*function one(){
var a = 0,
	b = 1;
		
	return{
		prop: 'val'
		}
}

*/
/*
function Robot(name){
var x = 0,
	y = 1;
	
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
}

var wally = new Robot("wall-e"),
	eve = new Robot("eve");

wally.color = "grey";
wally.walkRight();
eve.walkRight();
eve.walkDown();

alert(wally.color);
alert(wally.getY());
*/

/*
var current = new Date();
alert(current.getHours() + ":" + current.getMinutes() + " " + current.getDay() + "." + current.getMonth() + " " + current.getFullYear() + " года");
*/
/*
function goMad(){
	var interval = setInterval(sayHi, 2000);
	}

function sayHi(){
	alert('Hi');
	}
*/
/*
timeout = setTimeout(function() {
	alert('Timeout');
},0
	);
*/
/*
function giveTime() { // выдает время каждые 10 сек
var current = new Date();
alert(current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds());
}
var interval = setInterval(giveTime, 10000);
*/
//var para = document.getElementById('para');
//para.innerText += "newText";
//para.innerHTML += " <a href=''>newText2</a>";
/*
var links = document.getElementsByTagName('a');
console.log(links);
for (var i = 0; i< links.length; i++){
	links[i].href = "http://ya.ru";
	links[i].style.fontSize = "30px";
	links[i].setAttribute("style","font-weight: bold; color: red;");	
	}
*/
