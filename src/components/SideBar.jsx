import React from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';

const SideBar = ({ isLoggedIn, userLogIn, userName, mobileMenuOpened }) => {
  const sideBarClass = mobileMenuOpened ? 'side-bar opened' : 'side-bar';

  return (
    <div className={sideBarClass}>
      <UserInfo
        isLoggedIn={isLoggedIn} 
        userLogIn={userLogIn}
        userName={userName} />
      <div className="side-bar__links">
        <Link to="/terminals">Терминалы</Link>
        <Link to="/buyers">Покупатели</Link>
      </div>
      <div>Copyright &copy; 2020</div>
    </div>
  );
};

export default SideBar;