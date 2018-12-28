import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumsFether from "./components/albumsFetcher";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Albums Client</code>
            <AlbumsFether/>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
