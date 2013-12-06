var audio = document.getElementById('audio');

document.body.addEventListener('keypress', playPause)

function playPause(e) {
	if(e.keyCode == 32){
		if(audio.paused){
			audio.play();
		}else{
			audio.pause();
		}
				
	}
}
