import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import checkGitHubUser from '../../services/checkGitHubUser';

export default class Authorization extends Component {
  state = {
    nameInput: '',
    passwordInput: ''
  };

  onFormSubmit = async (e) => {
    e.preventDefault();

    const { userLogIn } = this.props;
    
    userLogIn();    
  };

  onNameChange = (e) => {
    const nameControl = e.target;

    this.setState({
      nameInput: nameControl.value
    });    
  };

  onPasswordChange = (e) => {
    const passwordControl = e.target;

    this.setState({
      passwordInput: passwordControl.value
    });    
  };

  render() {
    const { nameInput, passwordInput } = this.state;
    const { isLoggedIn } = this.props;
    if (!isLoggedIn) {
      return (
        <form
          onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Логин GitHub"
            value={nameInput}
            onChange={this.onNameChange} />
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="Пароль"
            value={passwordInput}
            onChange={this.onPasswordChange} />
          <button>Войти</button>  
        </form>
      );
    }
    return (
      <Redirect to="/" />
    );    
  }
};