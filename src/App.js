import React, { Fragment } from 'react';
import './App.css';

import AppRouter from "./Router";

const App = () => {
  return (
    <div>
      <Fragment>
        <div className="App">
          <AppRouter />
        </div>
      </Fragment>
    </div>
  );
}

export default App;
