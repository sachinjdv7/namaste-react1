import React from 'react';
import ReactDOM from 'react-dom/client';
import { Body } from './components';
import { Header } from './components';

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
