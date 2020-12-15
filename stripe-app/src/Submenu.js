import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    position,
    isSubmenuOpen,
    page: { page, links },
  } = useGlobalContext();

  const submenuContainerRef = useRef(null);
  useEffect(() => {
    const { bottom, center } = position;
    const container = submenuContainerRef.current;
    container.style.left = `${center}px`;
    container.style.bottom = `${bottom}px`;
    container.style.maxHeight = '200px';
  }, [position, links]);
  return (
    <aside
      ref={submenuContainerRef}
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
    >
      <section>
        <h4>{page}</h4>
        <div className='submenu-center col-2'>
          {links.map((link, idx) => {
            const { label, icon, url } = link;
            return (
              <a href={url} key={idx}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
