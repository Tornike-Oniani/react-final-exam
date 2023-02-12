import { useSelector } from 'react-redux';

import ResultItem from '../../components/result-item/result-item.component';

import './results-page.style.scss';

const ResultsPage = () => {
  const results = useSelector((state) => state.results);

  return (
    <div className="results-page">
      <h1 className="results-page__title">History:</h1>
      <ul className="results">
        {results.map((result, index) => {
          return (
            <li key={index} className="results__item">
              <ResultItem
                date={result.date}
                time={result.time}
                score={result.score}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResultsPage;
