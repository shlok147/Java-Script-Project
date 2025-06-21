const questions = [
  // 🔹 Easy Questions (1-10) - Mix of theory & simple coding
  {
    question: "What is JavaScript?",
    options: [
      "A programming language",
      "A type of coffee",
      "A database",
      "An OS",
    ],
    answer: 0,
    difficulty: "easy",
    hint: "It's used for web development.",
  },
  {
    question: "What is the output of `console.log(typeof [])`?",
    options: ["array", "object", "undefined", "string"],
    answer: 1,
    difficulty: "easy",
    hint: "Arrays are technically objects.",
  },
  {
    question: "Which keyword is used to declare variables in ES6?",
    options: ["var", "let", "const", "Both let and const"],
    answer: 3,
    difficulty: "easy",
    hint: "ES6 introduced two new ways to declare variables.",
  },
  {
    question: "What will `console.log(2 + '2')` output?",
    options: ["4", "22", "NaN", "Error"],
    answer: 1,
    difficulty: "easy",
    hint: "String concatenation happens if one operand is a string.",
  },
  {
    question: "Which function is used to print something in JavaScript?",
    options: ["echo()", "print()", "log()", "console.log()"],
    answer: 3,
    difficulty: "easy",
    hint: "Used for debugging and logging in console.",
  },
  {
    question: "How to declare an array in JavaScript?",
    options: [
      "let arr = [];",
      "let arr = {}",
      "let arr = ()",
      "let arr = array[];",
    ],
    answer: 0,
    difficulty: "easy",
    hint: "Arrays use square brackets.",
  },
  {
    question: "What does `NaN` stand for?",
    options: ["Not a Name", "Not a Number", "No and Never", "Null and None"],
    answer: 1,
    difficulty: "easy",
    hint: "It appears when a mathematical operation fails.",
  },
  {
    question: "Which method converts a string to an integer?",
    options: ["parseInt()", "toInt()", "Number()", "parseFloat()"],
    answer: 0,
    difficulty: "easy",
    hint: "It extracts numbers from a string.",
  },
  {
    question: "Which operator is used for strict equality?",
    options: ["==", "===", "!=", "!=="],
    answer: 1,
    difficulty: "easy",
    hint: "`===` checks both value and type.",
  },

  // 🔹 Medium Questions (11-20) - Logical thinking & functions
  {
    question: "What will be the output? `console.log(3 == '3')`",
    options: ["true", "false", "Error", "NaN"],
    answer: 0,
    difficulty: "medium",
    hint: "Non-strict comparison converts types.",
  },
  {
    question: "Which loop executes at least once?",
    options: ["for", "while", "do...while", "foreach"],
    answer: 2,
    difficulty: "medium",
    hint: "`do...while` runs before checking condition.",
  },
  {
    question: "How do you check if an object has a property?",
    options: [
      "object.hasOwnProperty()",
      "object.contains()",
      "object.has()",
      "object.find()",
    ],
    answer: 0,
    difficulty: "medium",
    hint: "Use a built-in method to check properties.",
  },
  {
    question: "What is the output?\n```js\nconsole.log(typeof NaN);\n```",
    options: ["undefined", "null", "number", "NaN"],
    answer: 2,
    difficulty: "medium",
    hint: "`NaN` is a special number type.",
  },
  {
    question: "What will `console.log(5 + true)` return?",
    options: ["5", "6", "true5", "Error"],
    answer: 1,
    difficulty: "medium",
    hint: "Boolean `true` is treated as `1` in math.",
  },
  {
    question: "Which array method removes the last element?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    answer: 1,
    difficulty: "medium",
    hint: "`pop()` removes from the end.",
  },
  {
    question: "How to reverse an array in JavaScript?",
    options: [
      "arr.reverse()",
      "arr.flip()",
      "arr.sort('desc')",
      "arr.revert()",
    ],
    answer: 0,
    difficulty: "medium",
    hint: "Use a built-in array method.",
  },
  {
    question: "Which symbol represents the OR operator?",
    options: ["&&", "||", "^^", "**"],
    answer: 1,
    difficulty: "medium",
    hint: "It's two vertical bars.",
  },
  {
    question: "What does `Array.isArray([])` return?",
    options: ["true", "false", "undefined", "null"],
    answer: 0,
    difficulty: "medium",
    hint: "Use this to check if a variable is an array.",
  },

  // 🔹 Hard Questions (21-30) - Complex logic & debugging
  {
    question:
      "What is the output?\n```js\nconsole.log([1, 2, 3] + [4, 5, 6]);\n```",
    options: ["[1,2,3,4,5,6]", "1,2,34,5,6", "Error", "NaN"],
    answer: 1,
    difficulty: "hard",
    hint: "Arrays are converted to strings.",
  },
  {
    question: "What does `Object.freeze(obj)` do?",
    options: [
      "Prevents modifications",
      "Deletes object",
      "Freezes memory",
      "None",
    ],
    answer: 0,
    difficulty: "hard",
    hint: "It makes an object immutable.",
  },
  {
    question: "What is closure in JavaScript?",
    options: [
      "A function inside another function",
      "A variable scope concept",
      "Both A & B",
      "None",
    ],
    answer: 2,
    difficulty: "hard",
    hint: "Functions retain access to outer scope.",
  },
  {
    question: "What will `console.log(0.1 + 0.2 === 0.3)` return?",
    options: ["true", "false", "Error", "NaN"],
    answer: 1,
    difficulty: "hard",
    hint: "Floating-point math is tricky.",
  },
  {
    question: "Which keyword stops execution of a function?",
    options: ["stop", "exit", "return", "break"],
    answer: 2,
    difficulty: "hard",
    hint: "Used to return a value from a function.",
  },
  {
    question: "What does `this` refer to in JavaScript?",
    options: [
      "Global object",
      "Current function",
      "Depends on context",
      "None",
    ],
    answer: 2,
    difficulty: "hard",
    hint: "It depends on where it's used.",
  },
  {
    question: "What is the difference between `==` and `===`?",
    options: ["No difference", "`===` checks type", "`==` is strict", "None"],
    answer: 1,
    difficulty: "hard",
    hint: "One does type conversion, the other doesn’t.",
  },
];

// Create a wrapper div to contain the quiz guidelines
let wrapper = document.createElement("div");
wrapper.classList.add("wrapper");

// Create a note div for displaying important quiz instructions
let note = document.createElement("div");
note.classList.add("note");
note.innerHTML = `
  <p><strong>---Important Quiz Guidelines---</strong></p><br>
  <ul style="list-style-type: square;">
    <li><strong>You can select an answer only once!</strong> Once selected, you cannot change it, so choose wisely.</li><br>
  </ul>
`;

// Create a cancel button for dismissing the guidelines
let cancelBtn = document.createElement("button");
cancelBtn.classList.add("cancel");
cancelBtn.innerText = "Got it!";
cancelBtn.style.display = "block";
cancelBtn.style.margin = "10px auto";
cancelBtn.style.padding = "5px 10px";
cancelBtn.style.cursor = "pointer";

// Append everything to the page
note.appendChild(cancelBtn);
wrapper.appendChild(note);
document.body.appendChild(wrapper);

// username
let name = document.getElementsByClassName("userName")[0];
let getName = sessionStorage.getItem("username");
if (getName) {
  name.innerHTML = getName;
} else {
  name.innerHTML = "Guest";
}

let currentPage = 0;
let userAnswers = {}; // Stores selected answers
let prevBtn = document.querySelector(".prevBtn");
let nextBtn = document.querySelector(".nextBtn");
let carousel = document.querySelector(".carousel");
let timerElement = document.querySelector(".timer");
let scoreEle = document.querySelector(".score");
let nmEle = document.querySelector(".nm");
let hintEle = document.querySelector(".hint");
let countdown;
let liveScore = 0;

// update quiz page
function updatePage() {
  let question = questions[currentPage];
  let questionHTML = `
    <div class="quetionDiv">
      <div class="quetion">${currentPage + 1}. ${question.question}</div>
      <div class="option">`;

  // create options btns
  for (let i = 0; i < question.options.length; i++) {
    let isSelected = userAnswers[currentPage] === i ? "selected" : "";
    let isCorrect =
      userAnswers[currentPage] === question.answer ? "correct" : "";
    let isIncorrect =
      userAnswers.hasOwnProperty(currentPage) &&
      userAnswers[currentPage] !== question.answer &&
      i === userAnswers[currentPage]
        ? "incorrect"
        : "";
    let isDisabled = userAnswers.hasOwnProperty(currentPage) ? "disabled" : "";

    questionHTML += `<button class="optionBtn ${isSelected} ${isCorrect} ${isIncorrect}" data-index="${i}" ${isDisabled}>
      ${question.options[i]}
    </button>`;
  }

  questionHTML += `</div></div>`;
  carousel.innerHTML = questionHTML;

  // Update question num
  nmEle.innerHTML = `${currentPage + 1} of ${questions.length}`;

  // hint for the current question
  hintEle.innerHTML = `Hint: ${question.hint}`;

  // Start timer based on difficulty
  level();

  // Add click event listeners to options (only if the user hasn't answered yet)
  if (!userAnswers.hasOwnProperty(currentPage)) {
    document.querySelectorAll(".optionBtn").forEach((btn) => {
      btn.addEventListener("click", selectAnswer);
    });
  }
}

//  to handle answer selection
function selectAnswer(event) {
  let selectedIndex = parseInt(event.target.getAttribute("data-index"));
  let correctIndex = questions[currentPage].answer;

  userAnswers[currentPage] = selectedIndex; // Store selected answer

  document.querySelectorAll(".optionBtn").forEach((btn) => {
    btn.disabled = true;
  });

  // selected answer is correct or incorrect
  if (selectedIndex === correctIndex) {
    event.target.classList.add("correct");
  } else {
    event.target.classList.add("incorrect");

    // correct answer
    document
      .querySelector(`.optionBtn[data-index="${correctIndex}"]`)
      .classList.add("correct");
  }

  updateScore(); // Update the live score display
}

// score logic
function updateScore() {
  liveScore = 0;
  Object.keys(userAnswers).forEach((index) => {
    if (userAnswers[index] === questions[index].answer) {
      liveScore++;
    }
  });

  scoreEle.innerHTML =
    liveScore < 10 ? ` Score: ${"0" + liveScore} ` : `Score: ${liveScore}`;
}

// next btn
function next() {
  if (currentPage < questions.length - 1) {
    currentPage++;
    updatePage();
  } else {
    alert(`🎉 Quiz Finished! Your final score is: ${liveScore}`);
    sessionStorage.setItem("quizScore",liveScore);
    window.location.href = "congratulations.html";
  }
}

// prev btn
function prev() {
  if (currentPage > 0) {
    currentPage--;
    updatePage();
  }
}

// level logic (easy, medium or hard)
function level() {
  if (!timerElement) return;

  let difficulty = questions[currentPage].difficulty;

  if (difficulty === "easy") {
    startTimer(30);
  } else if (difficulty === "medium") {
    startTimer(90);
  } else {
    stopTimer(); // no time for hard que
  }
}

//  to start the countdown timer
function startTimer(seconds) {
  stopTimer(); // Stop any existing timer

  let timeLeft = seconds;
  timerElement.innerHTML = `Time left: ${timeLeft}s`;

  countdown = setInterval(() => {
    timeLeft--;
    timerElement.innerHTML = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(countdown);
      alert("⏳ Time's up! Moving to the next question.");
      next();
    }
  }, 1000);
}

// to stop timer
function stopTimer() {
  clearInterval(countdown);
  timerElement.innerHTML = "";
}

// reomve note when click on cancel btn
cancelBtn.addEventListener("click", () => {
  wrapper.remove();
  updatePage();
});

// Attach event listeners to next and previous buttons
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prev);
