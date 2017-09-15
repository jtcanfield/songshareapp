import React, { Component } from 'react';

export default class PlayListItem extends Component {
  render() {
    return (
      <div className="PlayList">
        {this.props.arrayOfData.map(x =>
          <div className="card" key={x._id}>
            <div className="card-block">
              <p>{x.userName}</p>
              <p>{x.songArtist}</p>
              <p>{x.songTitle}</p>
              <p>{x.songNotes}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
