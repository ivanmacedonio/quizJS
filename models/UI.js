export class UI {
  constructor() {}

  showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
  }

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");
    choicesContainer.innerHTML = '' ///lo vaciamos sino cada render se stackean los botones
    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.innerText = choices[i];
      button.className = "button";
      button.addEventListener("click", () => callback(choices[i]));

      choicesContainer.append(button);
    }
  }

  showScores(score) {
    const gameOverHTML = `
      <h1>Result</h1>
      <h2 id="score">Your scores: ${score}</h2>
      `;
    const element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
  }

  showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    element.innerHTML = `Question ${currentIndex} of ${total}`;
  }
}
