// App.js

import React from 'react';
import './App.css';
import Feed from './Feed';
import Banner from './Banner';
import Navigation from './Navigation';


function App() {
  return (
    <div className="App"> 
    <Banner />
    <Navigation/>
      <Feed />
    </div>
  );
}

export default App;
