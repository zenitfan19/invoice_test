import React from 'react';

import notFoundImg from '../../assets/images/404.png';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>Запрашиваемая страница не найдена</h1>
      <img src={notFoundImg} alt="not-found"/>
    </div>
  );
};

export default NotFoundPage;