import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(){
  super()
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleTextChange = this.handleTextChange.bind(this);
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
  handleTextChange(event){
    event.preventDefault();
    //using [ ] can turn a string into an object selector
    this.setState({[event.target.id+"value"]: event.target.value});
  }
  handleSubmit(event){
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
    return (
      <div className="PlayListForm">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleTextChange} type="text" id="artist"
          placeholder="Artist/Band" value={this.state.artistvalue}/>
          <input onChange={this.handleTextChange} type="text" id="songname"
          placeholder="Song Name" value={this.state.songnamevalue}/>
          <input onChange={this.handleTextChange} type="textarea" id="notes"
          placeholder="Notes about Song:" value={this.state.notesvalue}/>
          <button type="submit">"SUBMIT"</button>
        </form>
        <p>{this.state.artist}
        {this.state.songname}
        {this.state.notes}</p>
      </div>
    );
  }
}
