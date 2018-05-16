import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './App.scss';
import BeerList from './containers/BeerList';

const App = () => (
  <BeerList />
);

export default hot(module)(App);
