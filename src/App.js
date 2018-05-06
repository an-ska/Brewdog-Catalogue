import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './App.scss';
import BeersList from './containers/BeersList';

const App = () => (
  <BeersList />
);

export default hot(module)(App);
