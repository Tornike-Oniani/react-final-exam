import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './test-result.style.scss';

const TestResult = () => {
  const score = useSelector((state) => state.test.result.score);
  const time = useSelector((state) => state.test.result.time);

  return (
    <div className="test-result">
      <span className="test-result__label">
        <b>Time spent:</b> {time}(s)
      </span>
      <span className="test-result__label">
        <b>Score:</b> {score}/10
      </span>
      <NavLink className="btn-link" to="/">
        Start again
      </NavLink>
    </div>
  );
};

export default TestResult;
