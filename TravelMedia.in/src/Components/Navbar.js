import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className='nav-container'>
    <h5>TravelMedia.in</h5>
    <div className='menu'>
    <NavLink to="/"><img src='/images/Path (1).jpg' alt=''/></NavLink>
    <NavLink to="#"><img src='/images/Path.jpg' alt=''/></NavLink>
    <NavLink to={`/item/${props.id}`}><img src='/images/Path (2).jpg' alt=''/></NavLink>
    <NavLink to="#"><img src='/images/Path (3).jpg' alt=''/></NavLink>
    </div>
    </div>
  )
}

export default Navbar;