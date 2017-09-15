import React, { Component } from 'react';
import PlayListItem from './PlayListItem.js';

export default class PlayList extends Component {
  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      console.log(data)
      const fulldata = res.data;
      this.setState({ listofLivequakes });
    })
  }
  render() {
    let playlistitems = earthquakes.features.map((quake) =>{
      return (
      <div className="col-sm-6" key={quake.id}>
        <div className="card" >
          <div className="card-block">

          </div>
        </div>
      </div>
    )
    });
    return (
      <div className="PlayList">
        {playlistitems}
      </div>
    );
  }
}
