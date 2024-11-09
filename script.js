"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let hint = "";
let isClicked = 0;

const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// chek number corect
function validateInput(input) {
  const value = input.value;
  const isValid = /^([1-9]|1[0-9]|20)$/.test(value);

  if (!isValid) {
    input.value = value.slice(0, -1);
  }
}

// help btn ----------------------------------------
const model = document.querySelector(".div_help");
const overlay = document.querySelector(".overlay");
const btnopenModel = document.querySelector(".show-modal");
const btncloseModel = document.querySelector(".close-modal");

const openModel = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModel = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnopenModel.addEventListener("click", openModel);
btncloseModel.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

// guidance -------------------------------------------
document.querySelector(".btn_guidance").addEventListener("click", function () {
  if (isClicked === 0) {
    score = score - 3;
    document.querySelector(".score").textContent = score;
    if (score > 1) {
      if (secretNumber % 2 == 0) {
        hint = "even";
      } else {
        hint = "odd";
      }
      document.querySelector(".guidance_text").textContent = hint;
    }
    isClicked = 1;
  }
});

// click in button -------------------------------------
document.querySelector(".btn_check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input_1").value);

  if (!guess) {
    showMessage("Please give a number! 🙄");
  } else if (guess === secretNumber) {
    showMessage("Correct Number! 🤩");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number_text").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      showMessage(guess > secretNumber ? "⬇️ come down " : "⬆️ come up ");
      document.querySelector(".score").textContent = score;
    } else {
      showMessage("☠️ game over! ");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// btn again -----------------------------------------
document.querySelector(".btn_again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  isClicked = 0;

  showMessage("start guessing ...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guidance_text").textContent = ".....";
  document.querySelector(".number_text").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("input_1").value = "";
});
