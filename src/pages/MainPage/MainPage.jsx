import React from 'react';
import { Redirect } from 'react-router-dom';
import developerImg from '../../assets/images/developer.jpg';

const MainPage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <div className="main-page">
        <h1>Тестовое задание для Invoice</h1>
        <div className="main-page__developer">
          <div className="main-page__developer-photo">
            <img src={developerImg} alt="frontend-developer" />
          </div>        
          <div className="main-page__developer-description">
            <h3>Выполнил: Андрей Лавров</h3>      
            <ol>
              <li>
                <strong>Telegram: </strong>
                <a href="tg://resolve?domain=andreyl19">@andreyl19</a>
              </li>
              <li>
                <strong>Gmail: </strong>         	
                <a href="mailto:fanton96mailru@gmail.com">fanton96mailru@gmail.com</a>
              </li>
              <li>
                <strong>Телефон: </strong>
                <a href="tel:+79313907817">+7 (931) 390-78-17</a>
              </li>
            </ol>
          </div>
        </div>      
      </div>
    );
  }
  return (
    <Redirect to="/login" />
  );
};

export default MainPage;