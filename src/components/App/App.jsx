import React from 'react';
import Header from '../Header/Header';
import PriceList from '../PriceList/PriceList';
import Footer from '../Footer/Footer';
import * as PRICES from '../../database/prices';
import { Switch, Route, withRouter } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <div className="content">
        <Header />
        <Switch>
          <Route path="/therapy">
            <PriceList
              data = {PRICES.therapy}
            />
          </Route>
          <Route path="/surgery">
            <PriceList
              data = {PRICES.surgery}
            />
          </Route>
          <Route path="/orthopedics">
            <PriceList
              data = {PRICES.orthopedics}
            />
          </Route>
          <Route path="/orthodontics">
            <PriceList
              data = {PRICES.orthodontics}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default withRouter(App);
