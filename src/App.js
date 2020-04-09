import React from 'react';
import './App.css';
import './styles.css';
import ChoosingPsalms from './components/choosing-psalms/ChoosingPsalms';
import PsalmContentDisplay from './components/psalm-content-display/PsalmContentDisplay'
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Route
        path="/"
        exact
        component={ChoosingPsalms}
      //render={() => <ChoosingPsalms />}
      />

      <Route
        path="/psalms?psalmId=:psalmId&psalmName=:psalmName"
        exact
        component={PsalmContentDisplay}
      />
    </div>
  );
}


export default App;
