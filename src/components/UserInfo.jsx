import React from 'react';

import defaultUserAvatar from '../assets/images/defaultUserAvatar.png';

const UserInfo = ({ isLoggedIn, userLogIn, userName }) => {
  const userAvatar = isLoggedIn ? `https://github.com/${userName}.png` : defaultUserAvatar;
  const gitHubAccount = isLoggedIn ? userName : 'Anonymous';
  
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
      <h1>{gitHubAccount}</h1>
      {logOutBtn}
    </>
  );
};

export default UserInfo;