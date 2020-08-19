import React, { Component } from 'react';
import CustomersTable from './components/CustomersTable';
import CustomerFilter from './components/CustomerFilter';
import RowsByPageSelector from './components/RowsByPageSelector';

import defaultCustomers from '../../constants/DefaultCustomers';

export default class Customers extends Component {
  state = {
    customers: defaultCustomers,
    rowsByPage: 15,
    currentPage: 0
  };  

  searchCustomer = (searchName) => {
    const newCustomersArr = defaultCustomers
      .filter(({ name }) => name.toLowerCase().includes(searchName.toLowerCase()));    

    this.setState({
      customers: newCustomersArr
    });
  };

  resetSearch = () => {
    this.setState({
      customers: defaultCustomers
    });
  };

  changeRowsByPage = (e) => {
    const rowsByPage = parseInt(e.target.value, 10); 
    
    this.setState({ rowsByPage });
  };
  
  render() {
    const { customers, rowsByPage, currentPage } = this.state;
    const customersToShow = customers
      .slice(currentPage * rowsByPage, currentPage * rowsByPage + rowsByPage);
    return (
      <>
        <CustomerFilter
          searchCustomer={this.searchCustomer}
          resetSearch={this.resetSearch} />
        <CustomersTable 
          customers={customersToShow} />
        <RowsByPageSelector
          changeRowsByPage={this.changeRowsByPage}
          rowsByPage={rowsByPage} />
      </>
    );
  }
}