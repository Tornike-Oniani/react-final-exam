import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './test-result.style.scss';

const TestResult = () => {
  const score = useSelector((state) => state.test.result.score);
  const time = useSelector((state) => state.test.result.time);

  return (
    <div className="test-result">
      <h2>Time: {time}</h2>
      <h2>Score: {score}</h2>
      <NavLink to="/">Start again</NavLink>
    </div>
  );
};

export default TestResult;
