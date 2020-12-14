import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { links, page },
  } = useGlobalContext();

  const containerRef = useRef(null);
  const [columns, setColumns] = useState(2);
  useEffect(() => {
    setColumns(2);
    const submenu = containerRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    if (links.length === 3) setColumns(3);
    if (links.length > 3) setColumns(4);
  }, [location, links]);

  return (
    <aside
      ref={containerRef}
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
