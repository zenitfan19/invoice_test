import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import CustomersTable from './components/CustomersTable';
import CustomerFilter from './components/CustomerFilter';
import RowsByPageSelector from './components/RowsByPageSelector';
import TablePagination from './components/TablePagination';

import defaultCustomers from '../../constants/DefaultCustomers';
import defaultRowsByPage from '../../constants/DefaultRowsByPage';

export default class Customers extends Component {
  state = {
    customers: defaultCustomers,
    rowsByPage: defaultRowsByPage,
    currentPage: 0,
    totalPages: this.calcTotalPages()
  };
  
  calcTotalPages (customers, rowsByPage) {
    if (customers)
      return Math.ceil(customers.length / rowsByPage);
    return Math.ceil(defaultCustomers.length / defaultRowsByPage);
  };

  searchCustomer = (searchName) => {
    const { rowsByPage } = this.state;
    const newCustomersArr = defaultCustomers
      .filter(({ name }) => name.toLowerCase().includes(searchName.toLowerCase()));    

    this.setState({
      customers: newCustomersArr,
      totalPages: this.calcTotalPages(newCustomersArr, rowsByPage),
      currentPage: 0
    });
  };

  resetSearch = () => {
    const { rowsByPage } = this.state;

    this.setState({
      customers: defaultCustomers,
      totalPages: this.calcTotalPages(defaultCustomers, rowsByPage),
      currentPage: 0
    });
  };

  changeRowsByPage = (e) => {
    const { customers } = this.state;
    const rowsByPage = parseInt(e.target.value, 10); 
    
    this.setState({
      rowsByPage,
      totalPages: this.calcTotalPages(customers, rowsByPage),
      currentPage: 0
    });
  };

  changeCurrPage = (pageIndex) => {
    this.setState({ currentPage: pageIndex });
  };
  
  render() {
    const { customers, rowsByPage, currentPage, totalPages } = this.state;
    const { isLoggedIn }  = this.props;
    const customersToShow = customers
      .slice(currentPage * rowsByPage, currentPage * rowsByPage + rowsByPage);
    
    if (isLoggedIn) {
      return (
        <div className="customers">
          <div className="customers-header">
            <CustomerFilter
              searchCustomer={this.searchCustomer}
              resetSearch={this.resetSearch} />
            <RowsByPageSelector
              changeRowsByPage={this.changeRowsByPage}
              rowsByPage={rowsByPage} />
          </div>          
          <TablePagination
            currentPage={currentPage}
            totalPages={totalPages}
            changeCurrPage={this.changeCurrPage} />
          <CustomersTable 
            customers={customersToShow} />                    
        </div>
      );
    }
    return (
      <Redirect to="/login" />
    );
  }
}