import React, { Component } from "react";
import "./index.css";
import SelectImage from './SelectImage.jsx';
import BeforeImageList from './BeforeImageList';

export default class App extends Component {
  state = {
    selectedChannel: null
  }

  changeChannel = (channel) => {
    this.setState({ selectedChannel: channel });
  }
  render() {
    const { selectedChannel } = this.state;
    return (
      <div className="App">
        <SelectImage onSelect={this.changeChannel} selectedImage={selectedChannel} />
        <BeforeImageList channel={selectedChannel} />
      </div>
    );
  }
}