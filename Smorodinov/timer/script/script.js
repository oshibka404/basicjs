start();


//===============================Функция часов

function setClock() {
	var interval = setInterval(clock, 1000);
}

function clock (){
	var current = new Date();
	var text = document.getElementById('textBox');
	text.innerHTML = getTimeString(current);
}

//================================Обработчик события - нажатие на кнопку

function start() {

//	setClock();

	var eggLightClick = document.getElementById('eggLight');
	if (eggLightClick.addEventListener) {
		eggLightClick.addEventListener('click', function() { 
			stopTime = new Date();

			stopTime = new Date(stopTime.getTime()+10000);

			counter(stopTime);
		 }, false);
	}

	var eggHardClick = document.getElementById('eggHard');
	if (eggHardClick.addEventListener) {
		eggHardClick.addEventListener('click', function() { 
			stopTime = new Date();

			stopTime = new Date(stopTime.getTime()+20000);

			counter(stopTime);
		}, false);
	}
	var pelmeni = document.getElementById('pelmeni');
	if (pelmeni.addEventListener) {
		pelmeni.addEventListener('click', function() { 
			stopTime = new Date();

			stopTime = new Date(stopTime.getTime()+70000);

			counter(stopTime);
		}, false);
	}

}

//========================================Функция счётчика

function counter(stopTime) {

	var now = new Date();
	var diff = new Date(stopTime - now);

	if (stopTime < now) {
		alarm();
		return;
	}

	var text = document.getElementById('textBox');
	text.innerHTML =  "Осталось: " +  getTimeStringMin(diff);
	setTimeout('counter(stopTime)',1000);
}

//===========================================Две функции - вывод времени в виде строки
function getTimeString(dateTime) {
	var timeString;
	var hours = dateTime.getHours();
	if (hours < 10) {
		hours = "0" + hours;
	}
	var min = dateTime.getMinutes();
	if (min < 10) {
		min = "0" + min;
	}
	var sec = dateTime.getSeconds();
	if (sec < 10) {
		sec = "0" + sec;
	}
	return timeString = hours + ":" + min + ":" + sec;
}

function getTimeStringMin(dateTime) {
	var timeString;
	var min = dateTime.getMinutes();
	if (min < 10) {
		min = "0" + min;
	}
	var sec = dateTime.getSeconds();
	if (sec < 10) {
		sec = "0" + sec;
	}
	return timeString = min + ":" + sec;
}

//============================================Функция вывода сообщения
function alarm() {

	/*
	Здесь также планировалось мигание текста (кпасный-белый) в течение пяти секунд со звуком, затем показ алерта.
	*/

	var text = document.getElementById('textBox');
	text.setAttribute("style","background-color: red; color: white; font-weight: bold");
	//добавить звуковой сигнал
	alert("Загляни-ка на кухню!");
	text.setAttribute("style","background-color: transparent; color: black; font-weight: normal");
}