import React from 'react';
import logo from './logo.svg';

import HelloWorld from './components/HelloWorld/HelloWorld';

import styles from './App.scss';

const App = () => (
  <div className={styles.app}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className={styles.title}>Welcome to React</h1>
    </header>
    <main className={styles.content}>
      <HelloWorld />
    </main>
  </div>
);

export default App;
