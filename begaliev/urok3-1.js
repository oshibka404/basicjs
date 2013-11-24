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
	
   this.getY = function() {
      return y;
   }
   
	this.name = name;
}

var wally = new Robot("wall-e"),
	 eve = new Robot("eve");
	 
wally.color = "grey";
wally.walkRight();	 
wally.walkRight();
wally.walkDown();

alert(wally.color);
alert(eve.color);