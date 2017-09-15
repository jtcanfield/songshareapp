import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(){
  super()
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleSongNameChange = this.handleSongNameChange.bind(this);
  this.handleArtistChange = this.handleArtistChange.bind(this);
  this.handleNotesChange = this.handleNotesChange.bind(this);
  this.state = {
    songname: "",
    songnamevalue: "",
    artist: "",
    artistvalue: "",
    notes: "",
    notesvalue: ""
    };
  }
  componentDidMount(){
    console.log("Component Did Actually Mount");
  }
  handleSongNameChange(event){
    event.preventDefault();
    this.setState({songnamevalue: event.target.value});
  }
  handleArtistChange(event){
    event.preventDefault();
    this.setState({artistvalue: event.target.value});
  }
  handleNotesChange(event){
    event.preventDefault();
    this.setState({notesvalue: event.target.value});
  }
  handleSubmit(event){
    console.log("Submit Fired");
    event.preventDefault();
    this.setState(
      {
        songname: this.state.songnamevalue,
        artist: this.state.artistvalue,
        notes: this.state.notesvalue
      }
    )
  }
  render() {
    console.log("Render Fired");
    return (
      <div className="PlayListForm">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleArtistChange} type="text" id="Artist"
          placeholder="Artist/Band" value={this.state.artistvalue}/>
          <input onChange={this.handleSongNameChange} type="text" id="Songname"
          placeholder="Song Name" value={this.state.songnamevalue}/>
          <input onChange={this.handleNotesChange} type="textarea" id="Notes"
          placeholder="Notes about Song:" value={this.state.notesvalue}/>
          <button type="submit">"SUBMIT"</button>
        </form>
        <p>




        {this.state.artist}
        {this.state.songname}
        {this.state.notes}</p>
      </div>
    );
  }
}
