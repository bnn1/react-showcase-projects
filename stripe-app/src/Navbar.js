import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import sublinks from './data';

const Navbar = () => {
  const { openSubmenu, closeSubmenu, toggleSidebar } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const containerPosition = e.target.getBoundingClientRect();
    const center = (containerPosition.left + containerPosition.right) / 2;
    const bottom = containerPosition.bottom;
    openSubmenu(page, { center, bottom });
  };
  const handleHover = (e) =>
    !e.target.classList.contains('link-btn') && closeSubmenu();
  return (
    <nav className='nav' onMouseOver={handleHover}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo' />
          <button onClick={toggleSidebar} className='btn toggle-btn'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {sublinks.map((link, idx) => {
            const { page } = link;
            return (
              <li key={idx}>
                <button onMouseOver={displaySubmenu} className='link-btn'>
                  {page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
