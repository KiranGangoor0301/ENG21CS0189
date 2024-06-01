import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './pages/frontpage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
