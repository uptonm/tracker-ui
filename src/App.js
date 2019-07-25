import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ButtonPage from './pages/ButtonPage';

export default () => {
  return (
    <Router>
      <div>
        <Route path="/button" component={ButtonPage} />
      </div>
    </Router>
  );
};
