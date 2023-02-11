import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/home-page/home-page.component';
import ResultsPage from './pages/results-page/results-page.component';
import TestPage from './pages/test-page/test-page.component';
import TestResult from './components/test-result/test-result.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/test/finish" element={<TestResult />} />
      </Routes>
    </div>
  );
}

export default App;
