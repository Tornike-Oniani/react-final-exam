import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchQuestions, setResult } from '../../features/test/testSlice';
import Question from '../../components/question/question.component';

import './test-page.style.scss';
import { NavLink } from 'react-router-dom';
import { addResult } from '../../features/results/resultsSlice';
import Loader from '../../components/loader/loader.component';

const TestPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [startTime, setStartTime] = useState(Date.now());
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
            questionIndex={questionIndex}
            handleAnswerSelect={handleAnswerSelect}
            question={questions[questionIndex].question}
            answers={questions[questionIndex].answers}
          />
          {questionIndex === 9 ? (
            <NavLink
              className={'btn-link'}
              disabled={!answer}
              onClick={() => {
                const secondsElapsed = Math.floor(
                  (Date.now() - startTime) / 1000
                );
                dispatch(setResult(secondsElapsed, score));
                dispatch(
                  addResult(
                    new Date(startTime).toString(),
                    secondsElapsed,
                    score
                  )
                );
              }}
              to="/test/finish"
            >
              Finish
            </NavLink>
          ) : (
            <button
              className="btn"
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
    <Loader />
  ) : (
    <div className="test-page">{renderQuestion()}</div>
  );
};

export default TestPage;
