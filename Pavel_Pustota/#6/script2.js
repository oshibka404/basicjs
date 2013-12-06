var	text = document.getElementById('content'),
	body = document.body;

	setInterval(function (){

	var newcolor='',
		newcolor2='';

	newcolor += '#';
	newcolor2 += '#';
	for (var i = 0; i<3; i++){
		newcolor += Math.floor(Math.random() * 15).toString(16);
		newcolor2 += Math.floor(Math.random() * 15).toString(16);
		while (newcolor == newcolor2){
			newcolor2 += Math.floor(Math.random() * 15).toString(16);
		}
	}

	body.style.backgroundColor = newcolor;
	text.style.color = newcolor2;
},200);