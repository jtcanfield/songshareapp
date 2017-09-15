import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar.js';
import PlayList from './PlayList.js';
import PlayListForm from './PlayListForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="NavBar-Holder">
          <NavBar />
        </div>
        <div className="PlayListForm-Holder">
          <PlayListForm />
        </div>
        <div className="PlayList-Holder">
          <PlayList />
        </div>
      </div>
    );
  }
}

export default App;
