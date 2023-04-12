import React, { useState } from 'react';
import axios from 'axios';

function FintechSolutions() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const generateQuestion = async () => {
    try {
      const response = await axios.get('/quiz');
      setQuestion(response.data.question);
      setIsCorrect(null);
    } catch (err) {
      console.error(err);
      alert(err);
      alert('Failed to generate quiz question.');
    }
  };

  const checkAnswer = async () => {
    try {
      const response = await axios.post('/quiz', { question, answer });
      setIsCorrect(response.data.isCorrect);
    } catch (err) {
      console.error(err);
      alert('Failed to check quiz answer.');
    }
  };

  return (
    <div>
      <h1>Fin-Tech Quiz</h1>
      <p>{question}</p>
      <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button onClick={checkAnswer}>Check Answer</button>
      <button onClick={generateQuestion}>Generate Question</button>
      {isCorrect === true && <p>Correct!</p>}
      {isCorrect === false && <p>Incorrect.</p>}
    </div>
  );
}

export default FintechSolutions;
