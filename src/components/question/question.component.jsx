import './question.style.scss';

const Question = ({ handleAnswerSelect, question, answers }) => {
  return (
    <div className="question">
      <h3 className="question__body">{question}</h3>
      <ul onChange={handleAnswerSelect} className="question__answers">
        {answers.map((answer, index) => {
          return (
            <li key={index} className="question__answer">
              <input id={index} type="radio" name="answer" value={answer} />
              <label htmlFor={index}>{answer}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
