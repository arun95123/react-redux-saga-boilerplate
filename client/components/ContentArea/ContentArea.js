import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import AboutUs from '../AboutUs';
import './ContentArea.style.css';

const ContentArea = () =>
  <main className='content-area'>
    <Switch>
      <Route exact path={'/'} component={Home}  />
      <Route path={'/about'} component={AboutUs} />
    </Switch>
  </main>;

export default ContentArea;
