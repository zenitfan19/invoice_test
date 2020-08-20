import React, { Component } from 'react';

 export default class CustomersFilter extends Component {
  state = {
    searchName: ''
  };

  onNameChange = (e) => {
    const searchControl = e.target;

    this.setState({
      searchName: searchControl.value
    }); 
  };

  onSearchFormSubmit = (e) => {
    e.preventDefault();
    
    const { searchCustomer } = this.props;
    const { searchName } = this.state;

    searchCustomer(searchName);    
  };

  onSearchFormReset = (e) => {
    e.preventDefault();

    const { resetSearch } = this.props;

    resetSearch();

    this.setState({
      searchName: ''      
    });
  };

  render() {
    const { searchName } = this.state;
    return (
      <form   
        className="form-filter"   
        onSubmit={this.onSearchFormSubmit}>        
        <input
          type="text"
          name="searchName"
          id="searchName"
          placeholder="Имя"
          autoComplete="off"
          value={searchName}
          onChange={this.onNameChange} />       
        <button
          className="btn"
          type="submit">
            Поиск
        </button>
        <button
          className="btn btn_default"
          type="button"
          onClick={this.onSearchFormReset}>
            Сбросить
        </button> 
      </form>
    );
  }
};