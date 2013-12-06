// возвращает cookie если есть или undefined
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))
	return matches ? decodeURIComponent(matches[1]) : undefined 
}

// уcтанавливает cookie
function setCookie(name, value, props) {
	props = props || {}
	var exp = props.expires
	if (typeof exp == "number" && exp) {
		var d = new Date()
		d.setTime(d.getTime() + exp*1000)
		exp = props.expires = d
	}
	if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

	value = encodeURIComponent(value)
	var updatedCookie = name + "=" + value
	for(var propName in props){
		updatedCookie += "; " + propName
		var propValue = props[propName]
		if(propValue !== true){ updatedCookie += "=" + propValue }
	}
	document.cookie = updatedCookie

}

// удаляет cookie
function deleteCookie(name) {
	setCookie(name, null, { expires: -1 })
}

var input = document.getElementById('addresbar'),
	go = document.getElementById('go'),
	full = document.getElementById('full'),
	content = document.getElementById('content'),
	key = 'rca.1.1.20131204T164209Z.e25a750782f3e21b.c8de4e44fb23dc6b2328859e252a8cf839a9a0c7',
	urlCookie = getCookie('urla');

if(urlCookie){
	input.value = urlCookie;
}

var handler = function(full){
	if (full != 1){
		full = 0;
	}
	url = input.value;
	var xhr = new XMLHttpRequest();
	xhr.open('GET','http://rca.yandex.com/?key=' + key + '&url=' + url + '&full='+ full , true);
	xhr.send();

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4){
			json = JSON.parse(xhr.response);

			title = json.title;
			text = json.content;
			error = json.error_code;
			errorMessage = json.error_message;

			
			if (content){
				document.title = title;
				content.innerHTML = text;
			}
			if (error||errorMessage){
				document.title = error;
				content.innerHTML = errorMessage;
			}

			console.log(xhr.response);
		}
	}
	setCookie('urla', url);
	content.innerHTML = "loading...";
}
var handlerFull = function(){
	handler(1);
}
go.addEventListener('click', handler);

full.addEventListener('click', handlerFull);

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