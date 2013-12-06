var lg = document.getElementById('lg'),
	txt = document.getElementById('txt');
	
lg.addEventListener('keydown', checkpassword);
lg.addEventListener('keyup', checkpassword);
lg.addEventListener('keypress', checkpassword);

function checkpassword(e) {
	var regexp = /[a-zA-Z]+/;
	if (!lg.value.match(regexp)){
		txt.innerHTML = 'пиздец';
	} else {
		txt.innerHTML = '';
	}
	// txt.innerHTML += e.keyCode + ', ';	
}