start();

//================================Обработчик события - нажатие на кнопку
  
  function start() {
    var eggLightClick = document.getElementById('eggLight'); 
    var eggHardClick = document.getElementById('eggHard');
  var pelmeniClick = document.getElementById('pelmeni');
  
   if (eggLightClick.addEventListener) {
      eggLightClick.addEventListener('click', function() {
        stopTime = new Date();

    stopTime = new Date(stopTime.getTime()+3*60000);
  
        counter(stopTime);
      },false);
  }

  if (eggHardClick.addEventListener) {
        eggHardClick.addEventListener('click', function() { 
        stopTime = new Date();
        stopTime = new Date(stopTime.getTime()+5*60000);
  
        counter(stopTime);
      }, false);
    }

    if (pelmeniClick.addEventListener) {
      pelmeniClick.addEventListener('click', function() { 
        stopTime = new Date();
        stopTime = new Date(stopTime.getTime()+7*60000);
  
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

//===========================================вывод времени в виде строки
  
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

    var text = document.getElementById('textBox');
    text.setAttribute("style","background-color: red; color: white; font-weight: bold");
    //добавить звуковой сигнал
    alert("Загляни-ка на кухню!");
    text.setAttribute("style","background-color: transparent; color: grey; font-weight: normal");
    text.innerHTML =  "";
    text.setAttribute("style","background-color: transparent; color: black; font-weight: normal");
}