import './question.style.scss';

const Question = ({ goToNextQuestion, question, correctAnswer, answers }) => {
  return (
    <div className="question">
      <h3 className="question__body">{question}</h3>
      <ul className="question__answers">
        {answers.map((answer, index) => {
          return (
            <li className="question__answer">
              <input id={index} type="radio" name="answer" value={answer} />
              <label htmlFor={index}>{answer}</label>
            </li>
          );
        })}
      </ul>
      <button onClick={() => goToNextQuestion()}>Next</button>
    </div>
  );
};

export default Question;
