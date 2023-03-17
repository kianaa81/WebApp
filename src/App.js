import './App.css';
import React, {useState} from 'react';

function App() {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "How many Harry Potter books are there?",
      options: [
        { id: 0, text: "3 Book", isCorrect: false },
        { id: 1, text: "4 Books", isCorrect: false },
        { id: 2, text: "8 Books", isCorrect: false },
        { id: 3, text: "7 Books", isCorrect: true },
      ],
    },
    {
      text: "What is the name of Harry's owl?",
      options: [
        { id: 0, text: "Hedwig", isCorrect: true },
        { id: 1, text: "Errol", isCorrect: false },
        { id: 2, text: "Fawkes", isCorrect: false },
        { id: 3, text: "Pigwidgeon", isCorrect: false },
      ],
    },
    {
      text: "Which Hogwarts house is known for its ambition and cunning?",
      options: [
        { id: 0, text: "Gryffindor", isCorrect: false },
        { id: 1, text: "Ravenclaw", isCorrect: false },
        { id: 2, text: "Slytherin", isCorrect: true },
        { id: 3, text: "Hufflepuff", isCorrect: false },
      ],
    },
    {
      text: "Who is the Potions professor in Harry's first year at Hogwarts?",
      options: [
        { id: 0, text: "Minerva McGonagall", isCorrect: false },
        { id: 1, text: "Serverus Snape", isCorrect: true },
        { id: 2, text: "Albus Dumbledore", isCorrect: false },
        { id: 3, text: "Rubeus Hagrid", isCorrect: false },
      ],
    },
    {
      text: "What charm is used to unlock doors?",
      options: [
        { id: 0, text: "Lumos", isCorrect: false },
        { id: 1, text: "Alohomora", isCorrect: true },
        { id: 2, text: "Incendio", isCorrect: true },
        { id: 3, text: "Accio", isCorrect: false },
      ],
    },
  ];


  return (
    <div className="App">
      <h1>Harry Potter Quiz</h1>
      <h2>Current score: {score}</h2>

      {showFinalResults ? (
              <div className='results'>
              <h1>Final Results</h1>
              <h2>3 out of 5 correct</h2>
    
              <button>Play Again</button>
          </div>
        ) : (
        <div className='questions'>
        <h2>Questions {currentQuestion + 1} out of {questions.length}</h2>

        <h3 className='questionTxt'>How many Harry Potter books are there?</h3>
        <ul>
          <li>1 Book</li>
          <li>4 Books</li>
          <li>6 Books</li>
          <li>7 Books</li>
        </ul>
      </div>
        ) }
    </div>
  );
}

export default App;
