import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

export default class PlayList extends Component {
  constructor() {
    super();
    this.state = {
      dataset: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
      fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
        return results.json();
      }).then(data => {
        this.setState({ dataset: data });
      })
    }
  render() {
    return (
      <div className="PlayList">
        <button onClick={this.fetchData}>"Refresh List"</button>
        <PlayListItem arrayOfData={this.state.dataset}/>
      </div>
    );
  }
}
