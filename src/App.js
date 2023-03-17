import './App.css';
import React, {useState} from 'react';

function App() {

  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

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
        <h2>Questions 4 out of 5</h2>

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
