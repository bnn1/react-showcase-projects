import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn'>
          <FaTimes onClick={toggleSidebar} />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((link, idx) => {
            const { page, links } = link;
            return (
              <article key={idx}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((sublink, idx) => {
                    const { label, icon, url } = sublink;
                    return (
                      <a key={idx} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
