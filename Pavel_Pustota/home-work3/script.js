var i = 0;
var container = document.getElementsByTagName('p');
function go() { 
	i = i-1;
	current.setSeconds(i);
	container[0].innerHTML = current.getMinutes()+':'+current.getSeconds(); 
	if (i==0){
		off(timeoutId);
	}
}
	 
function on(time) {
	current = new Date(0);
	current.setSeconds(time);
	i = time;
	container[0].innerHTML = current.getMinutes()+':'+current.getSeconds(); 
	timeoutId = setInterval(go, 1000)
}
	 
function off(ids) {
	clearTimeout(ids);
	alert('Хана');
}

