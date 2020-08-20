import React from 'react';

import defaultUserAvatar from '../assets/images/defaultUserAvatar.png';

const UserInfo = ({ isLoggedIn, userLogIn }) => {
  const userAvatar = defaultUserAvatar;
  const userName = 'Anonymous';
  
  const logOutBtn = isLoggedIn
                      ? (
                          <button
                            type="button"
                            onClick={userLogIn}>
                              Выйти
                          </button>
                        )
                      : null;
                      
  return (
    <>
      <img src={userAvatar} alt="userAvatar" />
      <h1>{userName}</h1>
      {logOutBtn}
    </>
  );
};

export default UserInfo;