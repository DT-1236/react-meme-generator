import React, { Component } from 'react';
//import './Meme.css';
import styled from 'styled-components';
import { connect } from 'react-redux';

const MemeDiv = styled.div`
  background-image: url(${props => props.url});

  flex-direction: column;
  background-size: cover;
  height: 600px;
  width: 800px;
  border-style: solid;
  border-color: black;
  margin-top: 20px;
  flex-shrink: 0;
  flex-grow: 0;
`;

const Spacer = styled.div`
  height: 60%;
`;

const MemeText = styled.p`
  font-family: Impact;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 0 #000, -1px 1px 0 #000, 1px -1px 0 #000,
    -1px -1px 0 #000, 0px 1px 0 #000, 0px -1px 0 #000, -1px 0px 0 #000,
    1px 0px 0 #000, 2px 2px 0 #000, -2px 2px 0 #000, 2px -2px 0 #000,
    -2px -2px 0 #000, 0px 2px 0 #000, 0px -2px 0 #000, -2px 0px 0 #000,
    2px 0px 0 #000, 1px 2px 0 #000, -1px 2px 0 #000, 1px -2px 0 #000,
    -1px -2px 0 #000, 2px 1px 0 #000, -2px 1px 0 #000, 2px -1px 0 #000,
    -2px -1px 0 #000;
  margin: 0 auto;
  font-size: 500%;
`;

class Meme extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.dispatch({ type: 'DELETE', payload: this.props.id });
  }

  render() {
    return (
      <MemeDiv id="meme" url={this.props.info.src} onClick={this.handleDelete}>
        <div>
          <MemeText>{this.props.info.top}</MemeText>
        </div>
        <Spacer id="spacer" />
        <div>
          <MemeText>{this.props.info.bottom}</MemeText>
        </div>
      </MemeDiv>
    );
  }
}

Meme.propTypes = {};

Meme.defaultProps = {
  info: { top: '', src: '', bottom: '' }
};

export default connect()(Meme);
