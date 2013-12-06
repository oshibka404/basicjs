var lg = document.getElementById('lg'),
	txt = document.getElementById('txt');
	
lg.addEventListener('keydown', checkpassword);
lg.addEventListener('keyup', checkpassword);
lg.addEventListener('keypress', checkpassword);

function checkpassword(e) {
	console.log(e.type);
	if (e.ctrlKey){
		console.log(e);
	};
	txt.innerHTML += e.keyCode + ', ';	
}