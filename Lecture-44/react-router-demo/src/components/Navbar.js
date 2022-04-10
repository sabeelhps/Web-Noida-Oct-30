import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav>
          <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/dog">Dog</Link></li>
              <li><Link to="/cat">Cat</Link></li>
          </ul>
    </nav>
  )
}

export default Navbar