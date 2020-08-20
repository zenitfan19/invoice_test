import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

const SideBar = ({ isLoggedIn, userLogIn, userName }) => {
  return (
    <>
      <UserInfo
        isLoggedIn={isLoggedIn} 
        userLogIn={userLogIn}
        userName={userName} />
      <div>
        <Link to="/terminals">Терминалы</Link>
        <Link to="/buyers">Покупатели</Link>
      </div>
      <div>Copyright &copy; 2020</div>
    </>
  );
};

export default SideBar;