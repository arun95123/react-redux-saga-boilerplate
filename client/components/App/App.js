import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import ContentArea from '../ContentArea';
import Nav from '../Nav';

const App = () => (
  <div>
    <Nav />
    <ContentArea />
  </div>
);

export default App;
