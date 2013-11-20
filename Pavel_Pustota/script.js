function go() {
	var interval = setInterval(sayHi, 10000);
}
function go2() {
	var timeout = setTimeout(sayHi, 2000);
}

function sayHi() {
	var current = new Date();
	alert(current.getSeconds()+':'+current.getMinutes()+':'+current.getHours()+' '+current.getDay()+'.'+current.getMonth()+' '+current.getFullYear()+' года');
}

go();