import React from 'react';
import Header from '../Header/Header';
import PriceList from '../PriceList/PriceList';
import Footer from '../Footer/Footer';
import * as PRICES from '../../database/prices';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <div className="content">
        <Header />
        <Switch>
          <Route path="/therapy">
            <PriceList
              data = {PRICES.therapy}
              heading="Терапия"
            />
          </Route>
          <Route path="/surgery">
            <PriceList
              data = {PRICES.surgery}
              heading="Хирургия"
            />
          </Route>
          <Route path="/orthopedics">
            <PriceList
              data = {PRICES.orthopedics}
              heading="Ортопедия"
            />
          </Route>
          <Route path="/orthodontics">
            <PriceList
              data = {PRICES.orthodontics}
              heading="Ортодонтия"
            />
          </Route>
          <Route exact path="/">
            <Redirect to="/therapy" />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(App);
