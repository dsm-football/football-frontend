import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  ClubManagement,
  ClubEstbl
} from './components'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/club/managment" component={ClubManagement} />
      <Route exact path="/clubEstbl" component={ClubEstbl} />
    </BrowserRouter>
  );
}

export default App;
