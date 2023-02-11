import './result-item.style.scss';

const ResultItem = ({ date, time, score }) => {
  return (
    <div className="result-item">
      <h2 className="result-item--header">Done at: {date}</h2>
      <p className="result-item__time">Time: {time}</p>
      <p className="result-item__score">Score: {score}</p>
    </div>
  );
};

export default ResultItem;
