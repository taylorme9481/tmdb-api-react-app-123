import React from 'react';
import './Navbar.css';


const Navbar = () => {
  const history = useHistory();
  return (
    <header className="header">
      <h1 className="logo" onClick={() => history.push('/HomePage')}>
        HomePage
      </h1>
    </header>
  );
};

export default Navbar;
