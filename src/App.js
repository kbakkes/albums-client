import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AlbumsFether from "./components/albumsFetcher";

class App extends Component {
  render() {
    return (
      <div className="App">


            <code>Albums Client</code>
            <AlbumsFether/>
      </div>
    );
  }
}

export default App;
