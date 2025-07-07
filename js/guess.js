let target = Math.floor(Math.random() * 100) + 1;
let chances = 10;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const feedback = document.getElementById("feedback");

  if (guess === target) {
    feedback.style.color = "green";
    feedback.textContent = " Correct! You guessed the number!";
  } else {
    chances--;
    if (chances === 0) {
      feedback.style.color = "red";
      feedback.textContent = " Game Over! The number was " + target;
    } else {
      feedback.style.color = "red";
      feedback.textContent = "Wrong! Try " + (guess < target ? "Higher" : "Lower") +
        `. You have ${chances} chances left.`;
    }
  }
}
