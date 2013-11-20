function Robot(name) {
	var x = 0,
		y = 0;

	this.walkRight = function() {
		x++;
	}
	this.walkDown = function() {
		y++;
	}
	this.getX = function() {
		return x;
	}
	this.name = name;	
}

var wally = new Robot('wall-e'),
	eve = new Robot('eve');

wally.color = "grey";
alert(wally.name);
alert(eve.name);
wally.walkRight();
alert(wally.getX());
alert(wally.color);
alert(ev.color);

