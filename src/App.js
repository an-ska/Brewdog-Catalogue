import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './App.scss';
import BrewdogCatalogue from './containers/BrewdogCatalogue';

const App = () => (
  <BrewdogCatalogue />
);

export default hot(module)(App);
