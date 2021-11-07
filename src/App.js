import React, { Fragment, Switch } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar/Navbar';
import URLS from './utils/urls';


const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/movie/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};


export default App;
