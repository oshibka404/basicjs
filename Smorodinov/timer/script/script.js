/*
//Функция часов
function setClock() {
	var interval = setInterval(clock, 1000);
}

function clock (){
	var current = new Date();
	var text = document.getElementById('textBox');
	text.innerHTML = "";
	text.innerHTML = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
}

setClock();
*/
//Обработчик события

function start() {
	var checkFood = 0;

	var eggLightClick = document.getElementById('eggLight');
	if (eggLightClick.addEventListener) {
		eggLightClick.addEventListener('click', function() { counter(10) }, false);
	}

	var eggHardClick = document.getElementById('eggHard');
	if (eggHardClick.addEventListener) {
		eggHardClick.addEventListener('click', function() { counter(20) }, false);
	}
	var pelmeni = document.getElementById('pelmeni');
	if (pelmeni.addEventListener) {
		pelmeni.addEventListener('click', function() { counter(30) }, false);
	}

	return true;
}

start();

function counter(myTime) {
	var now = new Date();
	var stopTime = new Date(now.getTime() + (myTime*1000));
	var diff = stopTime - now;

	var a = new Date(diff);

	var text = document.getElementById('textBox');
	text.innerHTML = "";
	text.innerHTML =  "Осталось: " + a.getMinutes() + ":" + a.getSeconds();
}

function setCounter(myTime) {
	var interval = setInterval(counter(myTime), 1000);
}