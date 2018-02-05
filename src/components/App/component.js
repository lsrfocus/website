// @flow

import React from 'react';

import NavBar from '../NavBar';
import MainBody from '../MainBody';
import Footer from '../Footer';

import './styles.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
