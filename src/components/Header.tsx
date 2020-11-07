import React, { ReactElement } from 'react';

import logo from '../assets/Union.svg';

const Header = (): ReactElement => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

export default Header;
