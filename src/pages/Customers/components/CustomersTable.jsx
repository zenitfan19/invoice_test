import React from 'react';
import { Link } from 'react-router-dom';

const CustomersTable = ({ customers }) => {
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
            <th className="clickable">Средний чек</th>
            <th className="clickable">Количество покупок</th>
            <th className="clickable">Общая выручка</th>
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