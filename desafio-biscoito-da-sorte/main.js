const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const cookie = document.querySelector("#cookie");
const playAgainBtn = document.querySelector("#playAgain");

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleClick(event) {
  toggleScreen();
}

cookie.addEventListener("click", handleClick);

playAgainBtn.addEventListener("click", function() {
  toggleScreen();
});

