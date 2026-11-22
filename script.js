let secret;
let attempts;

const form = document.getElementById("form");
const input = document.getElementById("guess");
const message = document.getElementById("message");
const attemptsEl = document.getElementById("attempts");
const restartBtn = document.getElementById("restart");

function newGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  attemptsEl.textContent = "0";
  message.textContent = "";
  input.value = "";
  input.disabled = false;
  restartBtn.hidden = true;
  input.focus();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const guess = Number(input.value);
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "اكتب رقماً بين 1 و 100";
    return;
  }
  attempts++;
  attemptsEl.textContent = attempts;

  if (guess === secret) {
    message.textContent = `🎉 أحسنت! الرقم هو ${secret}`;
    input.disabled = true;
    restartBtn.hidden = false;
  } else if (guess < secret) {
    message.textContent = "⬆️ الرقم أكبر";
  } else {
    message.textContent = "⬇️ الرقم أصغر";
  }
  input.value = "";
  input.focus();
});

restartBtn.addEventListener("click", newGame);
newGame();
