import React, { ReactElement } from 'react';

import logo from '../assets/Union.svg';

const Header = (): ReactElement => {
  return (
    <nav className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </nav>
  );
};

export default Header;
