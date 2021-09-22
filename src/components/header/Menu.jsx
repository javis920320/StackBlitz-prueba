import React, { Fragment } from 'react';
import './style.css';
const Menu = ({ titulo }) => {
  return (
    <Fragment>
      <header>
        <nav>
          <img src="" alt="" />
          <ul>
            <li>Home </li>
            <li>Home </li>
            <li>Home </li>
          </ul>
        </nav>
        {titulo}
      </header>
    </Fragment>
  );
};

export default Menu;
