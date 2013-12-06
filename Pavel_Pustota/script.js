var container = document.getElementById('container');
var secondcontainer = document.getElementById('secondcontainer');
var links = container.getElementsByTagName('a');
var link = secondcontainer.getElementsByTagName('a');

for (var i = 0; i < links.length; i++) {
	links[i].href = '#';
}

link[0].innerHTML = 'sdfvasdadsc';
