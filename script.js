const quizData = [
    {
      question: "In which state the puri jagannath temple is located?",
      a: "Andhra pradesh",
      b: "Oddisa",
      c: "Telangana",
      d: "Kerala",
      correct: "b",
    },
    {
      question: "Who invented the SHORT HAND script?",
      a: "Pitman",
      b: "Alexzander",
      c: "dennis ritche",
      d: "louis paster",
      correct: "a",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
        question: "what is OOPS stands for?",
      a: "Object Oriented Programming System",
      b: "Object Organized Programming system",
      c: "Object Oriented Programming Source",
      d: "not an acronym",
      correct: "a",

    }
  ];
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
      if(answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if(answer) {
      if(answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
      if(currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
          <button onclick="location.reload()">Reload</button>
        `;
      }
    }
  });
  