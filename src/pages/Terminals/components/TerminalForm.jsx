import React, { Component } from 'react';

export default class TerminalForm extends Component {
  state = {
    inputName: '',
    inputDescription: ''
  };

  onNameChange = (e) => {
    const nameControl = e.target;

    this.setState({
      inputName: nameControl.value
    });    
  };

  onDescriptionChange = (e) => {
    const descriptionControl = e.target;

    this.setState({
      inputDescription: descriptionControl.value
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    
    const { addTerminal } = this.props;
    const { inputName, inputDescription } = this.state;

    addTerminal(inputName, inputDescription);
    
    this.setState({
      inputName: '',
      inputDescription: ''
    });
  };

  render() {
    const { inputName, inputDescription } = this.state;
    return (
      <form
        className="form"     
        onSubmit={this.onFormSubmit}>
        <div className="form__input-group">
          <input
            type="text"
            name="terminalName"
            id="terminalName"
            placeholder="Имя терминала"
            autoComplete="off"
            value={inputName}
            onChange={this.onNameChange}
            required />
        </div>
        <div className="form__input-group">
          <textarea
            name="terminalDescription"
            id="terminalDescription"
            cols="30"
            rows="10"
            placeholder="Описание терминала"
            value={inputDescription}
            onChange={this.onDescriptionChange}
            required>
          </textarea>
        </div>        
        <button className="btn">Добавить</button>  
      </form>
    );
  } 
};