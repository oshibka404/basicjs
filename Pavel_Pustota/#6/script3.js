Array.prototype.max = function(){
	return Math.max.apply(Math, this);
}
var arr = new Array (1,2,3,4,5);

alert(arr.max());