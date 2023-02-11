import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchQuestions, setResult } from '../../features/test/testSlice';
import Question from '../../components/question/question.component';

import './test-page.style.scss';
import { NavLink } from 'react-router-dom';
import { addResult } from '../../features/results/resultsSlice';

const TestPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.test.questions);
  const status = useSelector((state) => state.test.status);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleAnswerSelect = (event) => {
    setAnswer(event.target.value);
  };

  const renderQuestion = () => {
    if (questions && questions.length > 0) {
      return (
        <div className="question-box">
          <Question
            handleAnswerSelect={handleAnswerSelect}
            question={questions[questionIndex].question}
            answers={questions[questionIndex].answers}
          />
          {questionIndex === 9 ? (
            <NavLink
              disabled={!answer}
              onClick={() => {
                dispatch(setResult(0, score));
                dispatch(addResult(0, 0, score));
              }}
              to="/test/finish"
            >
              Finish
            </NavLink>
          ) : (
            <button
              disabled={!answer}
              onClick={() => {
                // Check if answer was correct
                if (answer === questions[questionIndex].correctAnswer) {
                  setScore(score + 1);
                }
                // Reset selected answer
                setAnswer('');
                // Go to next question
                setQuestionIndex(questionIndex + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      );
    }

    return <p>Failed to fetch questions...</p>;
  };

  return status === 'loading' ? (
    <h1>Loading...</h1>
  ) : (
    <div className="test-page">
      <h1>Test page</h1>
      {renderQuestion()}
    </div>
  );
};

export default TestPage;
