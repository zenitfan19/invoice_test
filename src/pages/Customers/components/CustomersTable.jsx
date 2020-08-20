import React from 'react';

const CustomersTable = ({ customers }) => {
  const customersRows = customers.map((customer, index) => {
    const {
      id,
      name,
      average_check,
      total_purchases,
      total_revenue 
  } = customer;
    return (    
      <tr key={id}>
        <td
          title={`real ID: ${id}`}>
            {index+1}
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
            <th className="sortable_th">Средний чек</th>
            <th className="sortable_th">Количество покупок</th>
            <th className="sortable_th">Общая выручка</th>
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