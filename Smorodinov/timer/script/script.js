
//Функция часов
function setClock() {
	var interval = setInterval(clock, 1000);
}

function clock (){
	var current = new Date();
	var text = document.getElementById('textBox');
	text.innerHTML = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
}



//Обработчик события

function start() {

	setClock();

	var eggLightClick = document.getElementById('eggLight');
	if (eggLightClick.addEventListener) {
		eggLightClick.addEventListener('click', function() { 
			stopTime = new Date();

			stopTime = new Date(stopTime.getFullYear(), stopTime.getMonth(), stopTime.getDate(), stopTime.getHours(), stopTime.getMinutes(), stopTime.getSeconds()+10);

			counter();
		 }, false);
	}

	var eggHardClick = document.getElementById('eggHard');
	if (eggHardClick.addEventListener) {
		eggHardClick.addEventListener('click', function() { counter(20) }, false);
	}
	var pelmeni = document.getElementById('pelmeni');
	if (pelmeni.addEventListener) {
		pelmeni.addEventListener('click', function() { counter(70) }, false);
	}

}

//Функция счётчика

function counter() {

	var now = new Date();
	var diff = new Date(stopTime - now);

	if (stopTime < now) return;

	var text = document.getElementById('textBox');
	text.innerHTML =  "Осталось: " + diff.getMinutes() + ":" + diff.getSeconds(); //Сделать другой вывод через GetTimeString
	setTimeout(counter,1000);

}

start();