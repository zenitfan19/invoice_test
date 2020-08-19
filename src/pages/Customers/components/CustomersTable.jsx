import React from 'react';

const CustomersTable = ({ customers }) => {
  const customersRows = customers.map((customer) => {
    const {
      id,
      name,
      average_check,
      total_purchases,
      total_revenue 
  } = customer;
    return (    
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{average_check}</td>
        <td>{total_purchases}</td>
        <td>{total_revenue}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Имя</th>
          <th>Средний чек</th>
          <th>Количество покупок</th>
          <th>Общая выручка</th>
        </tr>
      </thead>
      <tbody>
        {customersRows}
      </tbody>      
    </table>
  );
};

export default CustomersTable;