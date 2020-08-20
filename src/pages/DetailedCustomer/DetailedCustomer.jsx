import React from 'react';
import { Redirect } from 'react-router-dom';

import defaultCustomers from '../../constants/DefaultCustomers';

const DetailedCustomer = ({ isLoggedIn, userId }) => {  
  if (isLoggedIn) {
    const user = defaultCustomers.find(({ id }) => id === userId);
    if (user) {
      const {
        id,
        name,
        average_check,
        total_purchases,
        total_revenue
      } = user;
      return (
        <div className="customer-info">
          <h1>Информация о покупателе:</h1>
          <ol>
            <li>
              <strong>id: </strong>
              {id}
            </li>
            <li>
              <strong>Имя: </strong>
              {name}
            </li>
            <li>
              <strong>Средний чек: </strong>
              {average_check}
            </li>
            <li>
              <strong>Количество покупок: </strong>
              {total_purchases}
            </li>
            <li>
              <strong>Общаяя выручка: </strong>
              {total_revenue}
            </li>
          </ol>
        </div>      
      );
    }
    return (
      <div className="customer-info">
        <h1>Информация о покупателе:</h1>
        <p>{`Покупатель с id: ${userId} не найден`}</p>
      </div>
    );
  }
  return (
    <Redirect to="/login" />    
  );  
};

export default DetailedCustomer;