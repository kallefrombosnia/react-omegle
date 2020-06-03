import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Routes from './routes/Routes';

function App() {
  
  return (
      <Router>

        <Routes />

        <Switch>
          <Route path="/go">
            <Home />
          </Route>
          <Route path="/faq">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>
  );

}

function Home(){
  return(
    <p> go liveee</p>
  );
}

function Test(){
  return(
    <p>  faqq </p>
  );
}

export default App;
