import React, { ReactElement } from 'react';

import Header from './components/Header';
import PersonFinder from './components/PersonFinder';

import './App.css';

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <PersonFinder />
    </div>
  );
}

export default App;
