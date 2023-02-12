import './result-item.style.scss';

const ResultItem = ({ date, time, score }) => {
  return (
    <div className="result-item">
      <h2 className="result-item__header">Done at: {date}</h2>
      <div className="result-item__content">
        <p className="result-item__label">
          <b>Time:</b> {time}(s)
        </p>
        <p className="result-item__label">
          <b>Score:</b> {score}
        </p>
      </div>
    </div>
  );
};

export default ResultItem;
