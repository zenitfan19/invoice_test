import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import checkGitHubUser from '../../services/checkGitHubUser';
import validatePassword from '../../utils/validatePassword';
import gitHubAccountErrorMsg from '../../constants/GitHubAccountErrorMsg';
import passwordErrorMsg from '../../constants/PasswordErrorMsg';

export default class Authorization extends Component {
  state = {
    nameInput: '',
    passwordInput: '',
    nameError: false,
    passwordError: false
  };

  onFormSubmit = async (e) => {
    e.preventDefault();

    const { userLogIn } = this.props;
    const { nameInput, passwordInput } = this.state;

    const noNameError = await checkGitHubUser(nameInput);
    const noPasswordError = !!validatePassword(passwordInput);

    this.setState({
      nameError: !noNameError,
      passwordError: !noPasswordError
    });
    
    if (noNameError && noPasswordError) userLogIn(nameInput);    
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
    const { nameInput, passwordInput, nameError, passwordError } = this.state;
    const { isLoggedIn } = this.props;
    
    const nameErrorAlert = nameError ? gitHubAccountErrorMsg : null;
    const passwordAlert = passwordError ? passwordErrorMsg : null; 

    if (!isLoggedIn) {
      return (
        <form
          onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="GitHub Аккаунт"
            value={nameInput}
            onChange={this.onNameChange} />
          {nameErrorAlert}        
          <input
            type="password"
            name="userPassword"
            id="userPassword"
            placeholder="Пароль"
            value={passwordInput}
            onChange={this.onPasswordChange} />
          {passwordAlert}
          <button>Войти</button>  
        </form>
      );
    }
    return (
      <Redirect to="/" />
    );    
  }
};