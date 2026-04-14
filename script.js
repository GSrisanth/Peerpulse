// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// QUIZ
const questions = [
  "Do you feel pressured to fit in?",
  "Do you change yourself for others?",
  "Do you fear being judged?",
  "Do you follow trends blindly?",
  "Do you struggle to say no?",
  "Do you compare yourself with others?",
  "Do you feel left out?",
  "Do you do things you regret?",
  "Do you depend on others for decisions?",
  "Do you feel uncomfortable being yourself?"
];

let currentQ = 0;
let score = 0;

function loadQuestion() {
  const qEl = document.getElementById("questionText");
  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  if (!qEl) return;

  qEl.innerText = questions[currentQ];

  bar.style.width = ((currentQ + 1) / questions.length) * 100 + "%";
  text.innerText = `Question ${currentQ + 1}/${questions.length}`;
}

function answer(val) {
  score += val;
  currentQ++;

  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("score", score);
    window.location.href = "result.html";
  }
}

window.onload = loadQuestion;

// PAGE TRANSITION
const transition = document.getElementById("pageTransition");

document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href && !href.startsWith("#")) {
      e.preventDefault();
      transition.classList.add("active");
      setTimeout(() => {
        window.location.href = href;
      }, 400);
    }
  });
});

