function sec10() 
{var cur = new Date();
var a = cur.getHours();
var b = cur.getMinutes();
var c = cur.getDate();
var d = cur.getMonth();
var e = cur.getFullYear();
alert(a + ":" + b + " " + c + "." + d + " " + e + " года");
};
setInterval(sec10,10000);