import React from 'react';

import Room from './components/Room/Room';
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Room} />
    </Router>
  );
}

export default App;
