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
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({ dataset: data });
    })
  }
  render() {
    this.state.dataset.map(x =>{
      console.log(x);
    })
    return (
      <div className="PlayList">
        {this.state.dataset.map(x =>
          <div className="col-sm-6" key={x._id}>
            <div className="card" >
              <div className="card-block">
                <p>{x.userName}</p>
                <p>{x.songTitle}</p>
                <p>{x.songArtist}</p>
                <p>{x.songNotes}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
