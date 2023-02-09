import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/navigation.component';
import HomePage from './pages/home-page/home-page.component';
import ResultsPage from './pages/results-page/results-page.component';
import TestPage from './pages/test-page/test-page.component';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
}

export default App;
