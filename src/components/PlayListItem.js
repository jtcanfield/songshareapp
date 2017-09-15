import React, { Component } from 'react';

export default class PlayListItem extends Component {
  constructor(props) {
    super(props);
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
