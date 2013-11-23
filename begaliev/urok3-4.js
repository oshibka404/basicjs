var links = document.getElementsByTagName('a');

//para.innerHTML += "<a href='#'>newText</a>";
//console.log(b);

for (var i = 0; i < links.length; i++) {
	links[i].href = "http://ya.ru";
	links[i].style.fontWeight = "bold";
	links[i].setAttribute("style","font-weight:bold;");
}