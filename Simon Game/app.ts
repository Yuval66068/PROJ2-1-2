let round: number = 0; 
let index: number = 0; 
let steps: Array<string> = [];
let buttons: Array<string> = ["green", "red", "yellow", "blue"];
let sounds: object = {
  green: new Audio("./snd1.wav"),
  red: new Audio("./snd2.wav"),
  yellow: new Audio("./snd3.wav"),
  blue: new Audio("./snd4.wav")
};

// HTML elements
let gameConsole:  HTMLElement = document.querySelector(".console");
let innerCircle: HTMLElement = document.querySelector(".inner-circle");
let buttonStart: Element = document.querySelector("button");
let colorButtons: NodeListOf<Element> = document.querySelectorAll(".button");

// Play sound
function playSound(event): void {
  let color: string = event.target.id;
  sounds[color].currentTime = 0;
  sounds[color].play();
  if (color == steps[index]) {
    index++;
    if (index == round) {
      index = 0;
      gameConsole.innerHTML = "Great job!";
      generateStep();
      showSteps();
    }
  } else {
    if (round == 0) {
      gameConsole.innerHTML = 'Press the "Start game" button!';
    } else {
      gameConsole.innerHTML = "Game over! You reached round " + round ;
      console.log(" Game Over...\n you reached round:", round ,"\n Press the Start game button");
      resetSimon();
      
      
    }
  }
}

// Generate a random color
function generateStep() {
  steps.push(buttons[Math.floor(Math.random() * buttons.length)]);
  round++;
  console.log("current level:", steps);
}

// Play specific step
function playStep(step: string): void {
  let hover: HTMLElement = document.getElementById(step);
  hover.classList.add("hover");
  sounds[step].play();
  setTimeout(function () {
    hover.classList.remove("hover");
  }, 300);
}

// Show all steps
function showSteps(): void {
  innerCircle.innerHTML = String(round);
  let num: number = 0;
  let moves = setInterval(function () {
    playStep(steps[num]);
    gameConsole.innerHTML = "Wait...";
    num++;
    if (num >= steps.length) {
      gameConsole.innerHTML = "Repeat the steps!";
      clearInterval(moves);
    }
  }, 600);
}

// Reset game
function resetSimon(): void {
  innerCircle.innerHTML = String(round);
  round = 0;
  index = 0;
  steps = [];
}

// Start game
function startGame(): void {
  resetSimon();
  generateStep();
  showSteps();
  console.log("Game Start...");
}

buttonStart.addEventListener("click", startGame);
for (let i = 0; i < colorButtons.length; i++) {
  colorButtons[i].addEventListener("click", playSound);
}
