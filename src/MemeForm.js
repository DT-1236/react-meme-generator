import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: justify;
  text-justify: distribute;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 20px;
  width: 60%;

  * {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledInput = styled.input`
  margin-left: 20px;
  width: 80%;
`;

class MemeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: "CAN'T GET FIRED",
      src: 'https://imgflip.com/s/meme/Roll-Safe-Think-About-It.jpg',
      bottom: "IF YOU DON'T HAVE A JOB"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    // runs on every keystroke
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const payload = { ...this.state };
    payload.id = uuid();
    this.props.dispatch({ type: 'ADD', payload });
  }

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="top">TOP: </label>
          <StyledInput
            onChange={this.handleChange}
            name="top"
            type="text"
            placeholder="TOP"
            value={this.state.top}
          />
        </div>
        <div>
          <label htmlFor="src">IMAGE URL: </label>
          <StyledInput
            onChange={this.handleChange}
            name="src"
            type="url"
            placeholder="IMAGE URL"
            value={this.state.src}
          />
        </div>
        <div>
          <label htmlFor="bottom">BOTTOM: </label>
          <StyledInput
            onChange={this.handleChange}
            name="bottom"
            type="text"
            placeholder="BOTTOM"
            value={this.state.bottom}
          />
        </div>
        <button>MEME!</button>
      </StyledForm>
    );
  }
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default connect()(MemeForm);
