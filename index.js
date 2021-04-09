let buttons = document.querySelectorAll(".drum");

//Detecting Button Pressed
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
   makeSound(this.innerHTML)
   animateButton(this.innerHTML);
  });
}

// Detecting Key Pressed
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  animateButton(event.key);
});

function makeSound(key) {

  switch (key) {

    case "w":
      new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
       new Audio("sounds/crash.mp3").play();
       break;
    case "k":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "l":
      new Audio("sounds/snare.mp3").play();
  }
}

function animateButton(keyPressed) {
  if (isProperKey(keyPressed)) {
  document.querySelector("." + keyPressed).classList.add("pressed");
}

  setTimeout(function(){
      if (isProperKey(keyPressed)) {
      document.querySelector("." + keyPressed).classList.remove("pressed");
  }}, 100);
}

function isProperKey(keyPressed) {
  if (keyPressed === "w" || keyPressed === "a" || keyPressed === "s" ||
      keyPressed === "d" || keyPressed === "j" || keyPressed === "k" ||
      keyPressed === "l") {
        return true;
      }
      return false;
}
