// QUIZ SECTION
const quizData = [
  {
    question: "Which medicine reduces fever?",
    answer: "Paracetamol",
  },
  {
    question: "Which vitamin boosts immunity?",
    answer: "Vitamin C",
  },
  {
    question: "Antibiotics are effective against?",
    answer: "Bacterial infections",
  },
];

let currentQuiz = 0;
const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");

function loadQuiz() {
  const item = quizData[currentQuiz];
  quizContainer.innerHTML = `
    <p><strong>Q${currentQuiz + 1}:</strong> ${item.question}</p>
    <input type="text" id="user-answer" placeholder="Your Answer" />
    <p id="feedback"></p>
  `;
  nextBtn.innerText = "Submit";
}

nextBtn.addEventListener("click", () => {
  const input = document.getElementById("user-answer");
  const feedback = document.getElementById("feedback");

  if (nextBtn.innerText === "Submit") {
    const userAns = input.value.trim().toLowerCase();
    const correctAns = quizData[currentQuiz].answer.toLowerCase();
    feedback.textContent =
      userAns === correctAns
        ? "✅ Correct Answer!"
        : `❌ Correct: ${quizData[currentQuiz].answer}`;
    nextBtn.innerText = "Next";
  } else {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      const userName = document.getElementById("name").value || "User";
      quizContainer.innerHTML = `<p>🎉 Well done, <strong>${userName}</strong>! You completed the quiz.</p>`;
      nextBtn.style.display = "none";
    }
  }
});

loadQuiz();

// API SECTION
document.getElementById("fetch-btn").addEventListener("click", () => {
  const output = document.getElementById("api-data");
  output.innerHTML = "⏳ Fetching health tip...";

  fetch("https://official-joke-api.appspot.com/jokes/general/random")
    .then((res) => res.json())
    .then((data) => {
      const tip = data[0];
      output.innerHTML = `
        <div style="margin-top: 1rem;">
          <h4>🩺 Health Tip</h4>
          <p><strong>${tip.setup}</strong></p>
          <p>${tip.punchline}</p>
        </div>
      `;
    })
    .catch((err) => {
      output.innerHTML = "❌ Failed to load health tip.";
      console.error(err);
    });
});
