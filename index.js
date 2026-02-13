import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "#pg0417h",
  port: 5432,
});

const app = express();
const port = 3000;

db.connect();

let quiz = [];

// Load data once when server starts
db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.error("Error executing query", err.stack);
  } else {
    quiz = res.rows;
    console.log("Database loaded successfully.");
  }
  // REMOVED db.end() - Keep the connection alive!
});

let totalCorrect = 0;
let currentQuestion = {};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function nextQuestion() {
  // Safety check: if database hasn't loaded yet, return a placeholder
  if (quiz.length === 0) {
    return { country: "Loading...", capital: "" };
  }
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry;
  return currentQuestion;
}

app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion(); 
  res.render("index.ejs", { 
    question: currentQuestion,
    totalScore: totalCorrect // Added this to avoid 'undefined' on first load
  });
});

app.post("/submit", async (req, res) => {
  let answer = req.body.answer.trim();
  let isCorrect = false;

  // Check answer
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    isCorrect = true;
  }

  // Get next question BEFORE rendering
  await nextQuestion();

  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
