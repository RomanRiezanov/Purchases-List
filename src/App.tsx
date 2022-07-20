import React from 'react';
import './styles/globals.scss';
import Header from './components/header/Header';
import './App.scss';
import PurchasesList from './components/PurchasesList';

const App = () => {
  const listItems = [
    { number: 1, name: 'DT-Brand-campaign', price: '$1,718.56', date: '12.07.2022', id: 1 },
    { number: 2, name: 'new_offer_8735', price: '$1,518.56', date: '12.07.2022', id: 2 },
    { number: 3, name: 'spring_2020', price: '$956.54', date: '12.07.2022', id: 3 },
    { number: 4, name: 'DT-ORIT-campaign', price: '$1,133.69', date: '12.07.2022', id: 4 },
  ];

  return (
    <div className="wrapper">
      <Header />;
      <PurchasesList listItems={listItems} />
    </div>
  );
};

export default App;
