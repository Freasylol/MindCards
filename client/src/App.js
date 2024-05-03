import React from 'react';
import DashBoard from './pages/DashBoard';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <DashBoard />
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </div>
  );
}

export default App;