import React from 'react';

function NavBar(props) {
  return (
    <nav className="navbar navbarDefault navbarFixedTop bgLight">
      <div className="container">
        <a className='navbarBrand' href="/">Acebook</a>
        <button className="btn btnOutlinePrimary">Log out</button>
      </div>
    </nav>
  );
}

export default NavBar;