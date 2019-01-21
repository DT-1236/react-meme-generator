import React, { Component } from 'react';
import './App.css';
import Meme from './Meme';
import MemeForm from './MemeForm';
import { connect } from 'react-redux';

class App extends Component {
  renderMemes() {
    const memes = [];
    const memeObject = this.props.memes;
    for (let id in memeObject) {
      memes.push(<Meme info={memeObject[id]} key={id} id={id} />);
    }
    return memes;
  }

  render() {
    return (
      <div className="App">
        <MemeForm />
        {this.renderMemes()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { memes: state.memes };
}

export default connect(mapStateToProps)(App);
