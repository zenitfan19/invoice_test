import React from 'react';

const passwordErrorMsg = (
  <p className="error-alert">
    Пароль должен содержать: 
    не менее 8 символов, 
    хотя бы 1 прописную латинскую букву, 
    хотя бы 1 заглавную латинскую букву, 
    хотя бы 1 цифру
  </p>
);

export default passwordErrorMsg;