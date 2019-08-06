import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import ButtonPage from './pages/ButtonPage';
import ColorsPage from './pages/ColorsPage';
import GeoLocationPage from './pages/GeoLocationPage';

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/geolocation" component={GeoLocationPage} />
        <Route path="/button" component={ButtonPage} />
        <Route path="/colors" component={ColorsPage} />
      </div>
    </Router>
  );
};

export default App;
