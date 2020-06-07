import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

import Routes from './routes/Routes';
import Welcome from './components/main/Welcome';
import Go from './components/go/Go';

function App() {
  
  return (
      <Router>

        <Routes />

        <Switch>
          <Route path="/go">
            <Go />
          </Route>
          <Route path="/faq">
            <Test />
          </Route>
          <Route path="/">
            <Welcome/>
          </Route>
        </Switch>

      </Router>
  );

}


function Test(){
  return(
    <p>  faqq </p>
  );
}

export default App;
