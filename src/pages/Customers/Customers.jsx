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
    totalPages: this.calcTotalPages(),
    currentSorting: null,
    sortingType: 0
  };
  
  calcTotalPages (customers, rowsByPage) {
    if (customers)
      return Math.ceil(customers.length / rowsByPage);
    return Math.ceil(defaultCustomers.length / defaultRowsByPage);
  };

  sortCustomers = (sortingColumn) => {
    const { currentSorting, sortingType } = this.state;
    
    let newCustomersArr = null;

    if (currentSorting === sortingColumn) {
      switch(sortingType) {
        case 1:
          newCustomersArr = defaultCustomers
                            .slice()
                            .sort((a, b) => b[sortingColumn] - a[sortingColumn]);
          this.setState({
            customers: newCustomersArr,      
            currentPage: 0,
            currentSorting: sortingColumn,
            sortingType: 2
          });
          break;
        default:
          newCustomersArr = defaultCustomers
                            .slice();        
          this.setState({
            customers: newCustomersArr,      
            currentPage: 0,
            currentSorting: null,
            sortingType: 0
          });  
          break;
      }
    } else {
      newCustomersArr = defaultCustomers
                        .slice()
                        .sort((a, b) => a[sortingColumn] - b[sortingColumn]);
      this.setState({
        customers: newCustomersArr,      
        currentPage: 0,
        currentSorting: sortingColumn,
        sortingType: 1
      });
    }        
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
    const {
      customers,
      rowsByPage,
      currentPage,
      totalPages,
      currentSorting,
      sortingType
    } = this.state;
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
            customers={customersToShow}
            currentSorting={currentSorting}
            sortingType={sortingType}
            sortCustomers={this.sortCustomers} />                    
        </div>
      );
    }
    return (
      <Redirect to="/login" />
    );
  }
}