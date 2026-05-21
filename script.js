// =======================
// VARIABLES
// =======================

let score = 0;
let lives = 3;
let currentQuestion = 0;

// =======================
// PREGUNTAS
// =======================

const questions = [
  {
    question: "Todos entienden Python mejor que yo",
    correct: "a",
    level: "Python 🐍",
  },

  {
    question: "Aprender programación requiere práctica",
    correct: "b",
    level: "Python 🐍",
  },

  {
    question: "Si no entiendo rápido significa que soy malo",
    correct: "a",
    level: "Python 🐍",
  },

  {
    question: "Cada error me ayuda a mejorar",
    correct: "b",
    level: "Python 🐍",
  },

  {
    question: "Nunca seré bueno programando",
    correct: "a",
    level: "Python 🐍",
  },

  {
    question: "Puedo aprender paso a paso",
    correct: "b",
    level: "Python 🐍",
  },

  {
    question: "Todos saben más SQL que yo",
    correct: "a",
    level: "SQL 🗃",
  },

  {
    question: "Practicar consultas mejora mis habilidades",
    correct: "b",
    level: "SQL 🗃",
  },

  {
    question: "Si me equivoco en SQL no sirvo",
    correct: "a",
    level: "SQL 🗃",
  },

  {
    question: "Los errores hacen parte del aprendizaje",
    correct: "b",
    level: "SQL 🗃",
  },

  {
    question: "Nunca entenderé las bases de datos",
    correct: "a",
    level: "SQL 🗃",
  },

  {
    question: "Pedir ayuda también es aprender",
    correct: "b",
    level: "SQL 🗃",
  },

  {
    question: "Mi dashboard quedó feo, soy malo",
    correct: "a",
    level: "Power BI 📊",
  },

  {
    question: "Cada dashboard mejora con práctica",
    correct: "b",
    level: "Power BI 📊",
  },

  {
    question: "Todos diseñan mejor que yo",
    correct: "a",
    level: "Power BI 📊",
  },

  {
    question: "Estoy aprendiendo nuevas habilidades",
    correct: "b",
    level: "Power BI 📊",
  },

  {
    question: "Nunca podré analizar datos bien",
    correct: "a",
    level: "Power BI 📊",
  },

  {
    question: "La práctica mejora mis análisis",
    correct: "b",
    level: "Power BI 📊",
  },

  {
    question: "Machine Learning es imposible para mí",
    correct: "a",
    level: "Machine Learning 🤖",
  },

  {
    question: "Puedo aprender conceptos difíciles poco a poco",
    correct: "b",
    level: "Machine Learning 🤖",
  },

  {
    question: "No soy suficientemente inteligente para esto",
    correct: "a",
    level: "Machine Learning 🤖",
  },

  {
    question: "Aprender lleva tiempo y paciencia",
    correct: "b",
    level: "Machine Learning 🤖",
  },

  {
    question: "Todos avanzan más rápido que yo",
    correct: "a",
    level: "Machine Learning 🤖",
  },

  {
    question: "Cada proyecto aumenta mi experiencia",
    correct: "b",
    level: "Machine Learning 🤖",
  },

  {
    question: "Seguro voy a fallar en la exposición",
    correct: "a",
    level: "Presentación Final 🎤",
  },

  {
    question: "Prepararme aumenta mi confianza",
    correct: "b",
    level: "Presentación Final 🎤",
  },

  {
    question: "No merezco estar en este bootcamp",
    correct: "a",
    level: "Presentación Final 🎤",
  },

  {
    question: "He avanzado mucho desde que empecé",
    correct: "b",
    level: "Presentación Final 🎤",
  },

  {
    question: "Todos son mejores que yo",
    correct: "a",
    level: "Presentación Final 🎤",
  },

  {
    question: "Cada persona aprende diferente",
    correct: "b",
    level: "Presentación Final 🎤",
  },

  {
    question: "Si fallo una vez significa fracaso",
    correct: "a",
    level: "Python 🐍",
  },

  {
    question: "Los errores ayudan a crecer",
    correct: "b",
    level: "Python 🐍",
  },

  {
    question: "Nunca conseguiré trabajo en datos",
    correct: "a",
    level: "SQL 🗃",
  },

  {
    question: "Estoy construyendo experiencia",
    correct: "b",
    level: "SQL 🗃",
  },

  {
    question: "No soy creativo para Power BI",
    correct: "a",
    level: "Power BI 📊",
  },

  {
    question: "La creatividad también se desarrolla",
    correct: "b",
    level: "Power BI 📊",
  },

  {
    question: "Me siento menos inteligente que los demás",
    correct: "a",
    level: "Machine Learning 🤖",
  },

  {
    question: "Todos empiezan desde cero",
    correct: "b",
    level: "Machine Learning 🤖",
  },

  {
    question: "Nunca entenderé tantos conceptos",
    correct: "a",
    level: "Python 🐍",
  },

  {
    question: "Puedo aprender un tema a la vez",
    correct: "b",
    level: "Python 🐍",
  },

  {
    question: "Si hago preguntas pensarán que no sé nada",
    correct: "a",
    level: "SQL 🗃",
  },

  {
    question: "Preguntar también es aprender",
    correct: "b",
    level: "SQL 🗃",
  },

  {
    question: "Mi proyecto no es suficientemente bueno",
    correct: "a",
    level: "Power BI 📊",
  },

  {
    question: "Cada proyecto aporta experiencia",
    correct: "b",
    level: "Power BI 📊",
  },

  {
    question: "No pertenezco al mundo tecnológico",
    correct: "a",
    level: "Machine Learning 🤖",
  },

  {
    question: "Estoy desarrollando habilidades tecnológicas",
    correct: "b",
    level: "Machine Learning 🤖",
  },

  {
    question: "Necesito ser perfecto para triunfar",
    correct: "a",
    level: "Presentación Final 🎤",
  },

  {
    question: "Aprender es un proceso continuo",
    correct: "b",
    level: "Presentación Final 🎤",
  },

  {
    question: "Nunca voy a mejorar",
    correct: "a",
    level: "Presentación Final 🎤",
  },

  {
    question: "La práctica constante genera progreso",
    correct: "b",
    level: "Presentación Final 🎤",
  },
];

// =======================
// MEZCLAR PREGUNTAS
// =======================

questions.sort(() => Math.random() - 0.5);

// =======================
// SOLO 5 PREGUNTAS
// =======================

const selectedQuestions = questions.slice(0, 5);

// =======================
// CARGAR PREGUNTA
// =======================

function loadQuestion() {
  document.getElementById("question").innerText =
    selectedQuestions[currentQuestion].question;

  document.getElementById("level").innerText =
    selectedQuestions[currentQuestion].level;

  updateProgress();
}

// =======================
// VERIFICAR RESPUESTA
// =======================

function checkAnswer(answer) {
  const correctAnswer = selectedQuestions[currentQuestion].correct;

  const message = document.getElementById("message");

  // CORRECTA

  if (answer === correctAnswer) {
    score++;

    message.innerHTML = "✅ ¡Correcto!";

    message.style.color = "#22c55e";
  }

  // INCORRECTA
  else {
    lives--;

    message.innerHTML = "❌ Incorrecto";

    message.style.color = "#ef4444";
  }

  // ACTUALIZAR

  document.getElementById("score").innerText = score;

  document.getElementById("lives").innerText = lives;

  currentQuestion++;

  // GAME OVER

  if (lives <= 0) {
    setTimeout(gameOver, 1000);

    return;
  }

  // FINAL

  if (currentQuestion >= selectedQuestions.length) {
    setTimeout(winGame, 1000);

    return;
  }

  // SIGUIENTE

  setTimeout(loadQuestion, 1200);
}

// =======================
// GAME OVER
// =======================

function gameOver() {
  document.querySelector(".game-container").innerHTML = `
<h1>☠ GAME OVER</h1>

<h2>
El síndrome del impostor ganó esta vez
</h2>

<button onclick="restartGame()">

🔄 Reintentar

</button>
`;
}

// =======================
// GANAR
// =======================

function winGame() {
  document.querySelector(".game-container").innerHTML = `
<h1>🏆 FELICIDADES</h1>

<h2>
Completaste la ronda
</h2>

<h2>
⭐ Puntaje Final: ${score}
</h2>

<p style="font-size:25px;">
💙 No necesitas ser perfecto para aprender
</p>

<button onclick="restartGame()">

🎮 Jugar otra vez

</button>
`;
}

// =======================
// REINICIAR
// =======================

function restartGame() {
  location.reload();
}

// =======================
// BARRA
// =======================

function updateProgress() {
  const progress = ((currentQuestion + 1) / selectedQuestions.length) * 100;

  document.getElementById("progressBar").style.width = progress + "%";
}

// =======================
// INICIAR
// =======================

loadQuestion();
