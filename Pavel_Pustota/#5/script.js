var Bach = {};

ctx = new window.webkitAudioContext();



Bach.play = function (frequency, duration, callback){
	var args = Array.prototype.slice.call(arguments),
	i = 0,
	osc;

	if (typeof args[0] == 'number'){
		frequency = args[0];
	} else if (args[0] && args[0].apply) {
		callback = args[0];
	}

	if (typeof args[1] == 'number'){
		duration = args[1];
	} else if (args[1] && args[1].apply) {
		callback = args[1];
	}

	if (args[2] && args[2].apply) {
		callback = args[2];
	}

	if (!frequency){
		frequency = 440;
	} 
	if (!duration){
		duration = 1000;
	}
	if (!callback){
		callback = new Function();
	}

// Издаём звук
	osc = ctx.createOscillator();
	
	osc.frequency.value = frequency;
	osc.connect(context.destination);
	osc.start(0);

	var intvl = setInterval(function(){
		osc.stop(0);
	}, duration);

	callback();
	return this;
}

Bach.play();