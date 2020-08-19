import React, { Component } from 'react';
import CustomersTable from './components/CustomersTable';
import CustomerFilter from './components/CustomerFilter';

import defaultCustomers from '../../constants/DefaultCustomers';

export default class Customers extends Component {
  state = {
    customers: defaultCustomers
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
  
  render() {
    const { customers } = this.state;
    return (
      <>
        <CustomerFilter
          searchCustomer={this.searchCustomer}
          resetSearch={this.resetSearch} />
        <CustomersTable 
          customers={customers} />
      </>
    );
  }
}