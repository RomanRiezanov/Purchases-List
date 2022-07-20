import React from 'react';
import './styles/globals.scss';
import Header from './components/header/Header';
import './App.scss';
import PurchasesList from './components/PurchasesList';

const App = () => {
  return (
    <div className="wrapper">
      <Header />;
      <PurchasesList />
    </div>
  );
};

export default App;
