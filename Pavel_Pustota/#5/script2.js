var arr = function(){
	return this;
};
arr.prototype = Array.prototype;

var myArr = new arr(1,2,3);

arr.prototype.max = function(){
	retutn Math.max.apply(Math, this);
}

alert(arr.prototype.max);