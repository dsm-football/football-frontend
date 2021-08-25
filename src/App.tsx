import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ClubManagement } from './components';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/club/management" component={ClubManagement}/>
    </BrowserRouter>
  );
}

export default App;
