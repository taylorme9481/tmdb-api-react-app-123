import React, {Fragment} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetail from './pages/MovieDetail';
import Navbar from './components/Navbar/Navbar';
import Switch from "react-router-0135";

const App = () => {
  return (
      <Fragment>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" components={HomePage} />
            <Route exact path="/movie/:id" component={MovieDetail} />
          </Switch>
        </BrowserRouter>
      </Fragment>
  );
};


export default App;
