import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';

import './App.css';
import HomePage from './pages/home-page/home-page.component';
import DashboardPage from './pages/dashboard-page/dashboard-page.component';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
