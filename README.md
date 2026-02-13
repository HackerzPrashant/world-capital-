🌍 World Capitals Quiz App

An interactive web-based quiz application that tests your knowledge of world capitals. Built using Node.js, Express.js, PostgreSQL, and EJS, this app dynamically fetches questions from a database and tracks the user's score in real-time.

🚀 Features

🎯 Randomly generated capital questions

📊 Real-time score tracking

🧠 Case-insensitive answer validation

🗄️ PostgreSQL database integration

🖥️ Clean server-side rendering using EJS

📁 Static public assets support

🛠️ Tech Stack

Backend: Node.js

Framework: Express.js

Database: PostgreSQL

Templating Engine: EJS

Middleware: body-parser

📂 Project Structure
/public        → Static files (CSS, images, etc.)
/views         → EJS templates
index.js       → Main server file

🧩 How It Works

The app connects to a PostgreSQL database.

It fetches all records from the capitals table.

A random country is selected for each question.

The user submits an answer.

The app compares it with the correct capital.

The score updates instantly.

A new question is displayed.

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/your-username/world-capitals-quiz.git
cd world-capitals-quiz

2️⃣ Install Dependencies
npm install

3️⃣ Configure PostgreSQL

Make sure you have PostgreSQL installed and create a database named:

world


Create a table named:

CREATE TABLE capitals (
  id SERIAL PRIMARY KEY,
  country VARCHAR(100),
  capital VARCHAR(100)
);


Insert some data into it.

4️⃣ Update Database Credentials

Inside your index.js:

const db = new pg.Client({
  user: "your_username",
  host: "localhost",
  database: "world",
  password: "your_password",
  port: 5432,
});

5️⃣ Run the Server
node index.js


Visit:

http://localhost:3000

🎓 Learning Outcomes

This project demonstrates:

Working with Express routes (GET & POST)

Connecting Node.js with PostgreSQL

Handling asynchronous operations

Server-side rendering with EJS

Managing application state

💡 Future Improvements

Add difficulty levels

Add timer functionality

Store high scores

Deploy on Render / Railway / Heroku

Add authentication system

👨‍💻 Author

Prashant Gulia
B.Tech AIML Student
Full-Stack & AI Enthusiast
