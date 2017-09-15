import React, { Component } from 'react';

export default class PlayListForm extends Component {
  constructor(props){
  super(props)
  this.handleTextChange = this.handleTextChange.bind(this);
  this.state = {
    userName: "",
    songTitle: "",
    songArtist: "",
    songNotes: "",
    };
  }
  handleTextChange(event){
    event.preventDefault();
    //using [ ] can turn a string into an object selector
    this.setState({[event.target.id]: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let listItem = JSON.stringify(this.state);
    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");
      this.setState({userName: '', songNotes: '', songArtist: '', songTitle:''});
    }).catch(err => {
      console.log(err, "boo!");
    });
  }
  render() {
    return (
      <div className="PlayListForm">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleTextChange} type="text" id="userName"
          placeholder="Whats you name?" value={this.state.userNamevalue}/>
          <input onChange={this.handleTextChange} type="text" id="songArtist"
          placeholder="Artist/Band" value={this.state.songArtist}/>
          <input onChange={this.handleTextChange} type="text" id="songTitle"
          placeholder="Song Name" value={this.state.songTitle}/>
          <input onChange={this.handleTextChange} type="textarea" id="songNotes"
          placeholder="Notes about Song:" value={this.state.songNotes}/>
          <button type="submit">"SUBMIT"</button>
        </form>
      </div>
    );
  }
}
