for (i=0; i<5; i++) {
	var login = prompt('Введи логин, у тебя осталось '+(5-i)+' попыток');
	var s=false;
	switch(login){
		case "Paul":
			for (y=0; y<5; y++) {
				var password = prompt(login+' введи пароль, у тебя осталось '+(5-y)+' попыток');
				if (password==='demo'){
					console.log('You win '+login);
					s=true;
					break;
			  	};
			};	
			break;
		case "Paul2":
			for (y=0; y<5; y++) {
				var password = prompt(login+' веди пароль, у тебя осталось '+(5-y)+' попыток');
				if (password==='demo'){
					console.log('You win '+login);
					s=true;
					break;
			  	};
			};	
			break;
		case "Paul3":
			for (y=0; y<5; y++) {
				var password = prompt(login+' веди пароль, у тебя осталось '+(5-y)+' попыток');
				if (password==='demo'){
					console.log('You win '+login);
					s=true;
					break;
			  	};
			};	
			break;
		 default:	
			break;
	};
	if(i==5||s)break;
};