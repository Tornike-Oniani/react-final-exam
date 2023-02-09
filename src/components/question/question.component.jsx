import './question.style.scss';

const Question = ({
  questionIndex,
  setQuestionIndex,
  question,
  correctAnswer,
  incorrectAnswers,
}) => {
  return (
    <div className="question">
      <h3 className="question__body">{question}</h3>
      <ul className="question__answers">
        {createShuffledArrayCopy([correctAnswer, ...incorrectAnswers]).map(
          (answer, index) => {
            return (
              <li className="question__answer">
                <input id={index} type="radio" name="answer" value={answer} />
                <label htmlFor={index}>{answer}</label>
              </li>
            );
          }
        )}
      </ul>
      <button
        onClick={() => {
          setQuestionIndex(questionIndex + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

const createShuffledArrayCopy = (array) => {
  const result = [...array];
  return result.sort(() => Math.random() - 0.5);
};

export default Question;
