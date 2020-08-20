import React from 'react';
import { Link } from 'react-router-dom';
import sortDownIcon from '../../../assets/images/sort-down.svg';
import sortUpIcon from '../../../assets/images/sort-up.svg';

const CustomersTable = ({ customers, sortCustomers, currentSorting, sortingType }) => {
  const customersRows = customers.map((customer, index) => {
    const {
      id,
      name,
      average_check,
      total_purchases,
      total_revenue 
    } = customer;
    const linkToCustomer = `/buyers/${id}`;

    return (    
      <tr key={id}>
        <td
          className="clickable"
          title={`real ID: ${id}`}>
            <Link
              to={linkToCustomer}>
                {index+1}
            </Link>
        </td>
        <td>{name}</td>
        <td>{average_check}</td>
        <td>{total_purchases}</td>
        <td>{total_revenue}</td>
      </tr>
    );
  });
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th
              className={`clickable ${currentSorting === 'average_check' ? sortingType === 1 ? 'up' : 'down' : '' }`}
              onClick={() => sortCustomers('average_check')}>
                <img className="sort-down" src={sortDownIcon} alt="sort-down"/>
                <img className="sort-up" src={sortUpIcon} alt="sort-up"/>
                Средний чек
            </th>
            <th
              className={`clickable ${currentSorting === 'total_purchases' ? sortingType === 1 ? 'up' : 'down' : '' }`}
              onClick={() => sortCustomers('total_purchases')}>
                <img className="sort-down" src={sortDownIcon} alt="sort-down"/>
                <img className="sort-up" src={sortUpIcon} alt="sort-up"/>
                Количество покупок
            </th>
            <th className={`clickable ${currentSorting === 'total_revenue' ? sortingType === 1 ? 'up' : 'down' : '' }`}
            onClick={() => sortCustomers('total_revenue')}>
              <img className="sort-down" src={sortDownIcon} alt="sort-down"/>
              <img className="sort-up" src={sortUpIcon} alt="sort-up"/>
              Общая выручка
            </th>
          </tr>
        </thead>
        <tbody>
          {customersRows}
        </tbody>      
      </table>
    </div>    
  );
};

export default CustomersTable;