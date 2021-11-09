let interactable = document.getElementById("interactable");
let player = document.getElementById("player");
let cat = document.getElementById("cat");

var colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'black', 'grey', 'orange'];
var currentIndex = 0;
var timePassed = 0;

interactable.addEventListener('click', () => {
	if (player.paused){
		player.play();
	} else{
		player.pause();
	}
});

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
  	if (!player.paused){
	    cat.play();
	    currentIndex++;
	    currentIndex = currentIndex % 9;
	    document.body.style.backgroundColor = colors[currentIndex];
	}
  }
})

player.addEventListener('pause', () => {
  document.body.style.backgroundColor = "white";
});



