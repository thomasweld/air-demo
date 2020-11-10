import React, { ReactElement } from 'react';

import Header from './components/Header';
import PersonFinderContainer from './components/PersonFinderContainer';

import './App.css';

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <PersonFinderContainer />
    </div>
  );
}

export default App;
