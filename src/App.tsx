import React from 'react';
import QuestionCard from './components/QuestionCard';
// import './App.css';

// Video: https://www.youtube.com/watch?v=F2JCjVSZlG0&t=46s
// Code: https://github.com/weibenfalk/react-quiz
// Live Demo: https://tender-mcnulty-a4a646.netlify.app/
// API: https://opentdb.com/api_config.php
// Image: https://www.pexels.com/photo/hot-air-ballons-in-the-sky-2325446/

const App = () => {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className='App'>
      <h1>REACT QUIZ</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      <QuestionCard />
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
