import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ButtonPage from './pages/ButtonPage';
import ColorsPage from './pages/ColorsPage';

export default () => {
  return (
    <Router>
      <div>
        <Route path="/button" component={ButtonPage} />
        <Route path="/colors" component={ColorsPage} />
      </div>
    </Router>
  );
};
