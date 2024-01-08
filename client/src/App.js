import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import DashBoard from './pages/DashBoard';
import Deposit from './pages/Deposit';
import Credit from './pages/Credit';
import CardSet from './pages/Cardset';
import Profile from './pages/Profile';
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