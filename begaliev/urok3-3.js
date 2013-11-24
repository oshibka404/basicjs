function timeUp() {
   var interval =
   setInterval(sayTime, 2000)
}

function sayTime() {
   var time = new Date();               
   alert(time);
}

timeUp();

