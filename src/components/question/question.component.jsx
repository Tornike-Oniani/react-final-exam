import './question.style.scss';

const Question = ({ questionIndex, handleAnswerSelect, question, answers }) => {
  return (
    <div className="question">
      <h3 className="question__body">{question}</h3>
      <h4 className="question__number">Question {questionIndex + 1}/10</h4>
      <ul onChange={handleAnswerSelect} className="question__answers">
        {answers.map((answer, index) => {
          return (
            <li key={answer + questionIndex} className="question__answer">
              <input
                className="question__answer-box"
                id={index}
                type="radio"
                name={'answer'}
                value={answer}
              />
              <label className="question__answer-label" htmlFor={index}>
                {answer}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
