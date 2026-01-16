const correctAnswers = {
  q1: "B", // Rendang
  q2: "B", // Kedelai
  q3: "C", // Italia
  q4: "C", // Nasi
  q5: "C"  // Sushi
};

const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const quizForm = document.getElementById("quizForm");
const resultDiv = document.getElementById("result");

submitBtn.addEventListener("click", () => {
  let score = 0;

  for (let key in correctAnswers) {
    const answer = document.querySelector(`input[name="${key}"]:checked`);
    if (answer && answer.value === correctAnswers[key]) {
      score += 20;
    }
  }

  document.getElementById("scoreText").innerText = `Skor Anda: ${score}`;
  document.getElementById("statusText").innerText =
    score >= 70 ? "Status: LULUS ✅" : "Status: TIDAK LULUS ❌";

  quizForm.style.display = "none";
  resultDiv.classList.remove("hidden");
});

resetBtn.addEventListener("click", () => {
  quizForm.reset();
  quizForm.style.display = "block";
  resultDiv.classList.add("hidden");
});
