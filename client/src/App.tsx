import React from 'react';

import logo from './assets/logo.png';

const App: React.FC = () => {

  return (
    <div className="container">
      <header className="d-flex mt-5 mb-3">
        <div className="flex-row align-items-center d-flex">
          <img src={logo} alt="Shopping List Logo" />
          <h1 className="mb-0 ms-4">Shopping List</h1>
        </div>
      </header>
    </div>
  );
};

export default App;
