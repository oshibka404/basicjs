var log = 'Cvet',
	par = '1234',
	n = 5;
var log1 = prompt('Введите логин.');
if (log == log1){
	var i=1;
	while (i<=n){
		var par1 = prompt('Введите пароль.');
		if  (par == par1){
			alert('Секретная информация.');
			break;
		}		
		if (i==n){
			alert('Отказ авторизации. Не верный пароль.');
		}
		else alert('Не верный пароль. Попыток осталось '+ (n-i)+'.');	
		i++;	
	}
}
else alert('Отказ авторизации. Не верный логин.');


