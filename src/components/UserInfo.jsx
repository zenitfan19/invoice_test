import React from 'react';

import defaultUserAvatar from '../assets/images/defaultUserAvatar.png';

const UserInfo = ({ isLoggedIn, userLogIn, userName }) => {
  const userAvatar = isLoggedIn ? `https://github.com/${userName}.png` : defaultUserAvatar;
  const gitHubAccount = isLoggedIn ? userName : 'Anonymous';
  
  const logOutBtn = isLoggedIn
                      ? (
                          <button
                            className="btn"
                            type="button"
                            onClick={() => userLogIn()}>
                              Выйти
                          </button>
                        )
                      : null;
                      
  return (
    <div className="side-bar__user-info">
      <img src={userAvatar} alt="userAvatar" />
      <h1>{gitHubAccount}</h1>
      {logOutBtn}
    </div>
  );
};

export default UserInfo;