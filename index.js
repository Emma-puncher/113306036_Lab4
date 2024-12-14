/*var clickDrum = document.getElementsByClassName("drum");

for (var i = 0; i < clickDrum.length; i++) {
    clickDrum[i].addEventListener("click", sound);
    clickDrum[i].addEventListener("mousedown", addPressedClass);
    clickDrum[i].addEventListener("mouseup", removePressedClass);
    clickDrum[i].addEventListener("mouseout", removePressedClass);
}

function sound(event) {
	var key = event.target.classList[0];
	playSound(key);
	triggerPressedEffect(event.target);
}

document.addEventListener("keydown", function(event) {
	var key = event.key;
	if (["w", "a", "s", "d", "j", "k", "l"].includes(key)) {
		var button = document.querySelector("." + key);
		playSound(key);
		triggerPressedEffect(button);
	}
});*/

/*function playSound(key) {
	var audio = document.querySelector("." + key);
	if (audio) {
		audio.play();
	}
}

function triggerPressedEffect(button) {
	button.classList.add("pressed");
	setTimeout(function() {
		button.classList.remove("pressed");
	}, 100);
}

var drumButtons = document.querySelectorAll(".drum"); // Select all drum buttons
drumButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        var key = button.classList[0]; // Get the class name (w, a, s, d, etc.)
        playSound(key); // Play the corresponding sound
        triggerPressedEffect(button); // Apply the pressed effect
    });
});

// Event listener for keyboard presses
document.addEventListener("keydown", function(event) {
    var key = event.key; // Get the key pressed
    if (["w", "a", "s", "d", "j", "k", "l"].includes(key)) { // If valid key pressed
        var button = document.querySelector("." + key); // Find the button that matches the key
        playSound(key); // Play the corresponding sound
        triggerPressedEffect(button); // Apply the pressed effect
    }
});*/

// Define a mapping of keys to sound files and their corresponding button classes
const drumSounds = {
  'w': 'sounds/crash.mp3',
  'a': 'sounds/kick-bass.mp3',
  's': 'sounds/snare.mp3',
  'd': 'sounds/tom-1.mp3',
  'j': 'sounds/tom-2.mp3',
  'k': 'sounds/tom-3.mp3',
  'l': 'sounds/tom-4.mp3',
};

// Function to play sound
function playSound(key) {
  const soundFile = drumSounds[key];
  if (soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
  }
}

// Function to add "pressed" class (animation effect) to buttons
function animateButton(key) {
  const button = document.querySelector(`.${key}`);
  if (button) {
    button.classList.add('pressed');
    // Remove the "pressed" class after animation duration (100ms)
    setTimeout(() => button.classList.remove('pressed'), 100);
  }
}

// Function that will be called when a key is pressed or a button is clicked
function handleEvent(event) {
  const key = event.key || event.target.innerText.toLowerCase(); // Get the key pressed or button clicked
  playSound(key);
  animateButton(key);
}

// Add event listeners for button clicks
const drumButtons = document.querySelectorAll('.drum');
drumButtons.forEach(button => {
  button.addEventListener('click', handleEvent);
});

// Add event listener for keyboard presses
window.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if (drumSounds[key]) {
    handleEvent(event);
  }
});
