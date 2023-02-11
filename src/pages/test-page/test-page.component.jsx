import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchQuestions } from '../../features/test/testSlice';
import Question from '../../components/question/question.component';

import './test-page.style.scss';

const TestPage = () => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.test.questions);
  const status = useSelector((state) => state.test.status);

  const goToNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
  };

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const renderQuestion = () => {
    if (questions && questions.length > 0) {
      return (
        <Question
          goToNextQuestion={goToNextQuestion}
          question={questions[questionIndex].question}
          correctAnswer={questions[questionIndex].correct_answer}
          answers={questions[questionIndex].answers}
        />
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
