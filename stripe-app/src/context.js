import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [position, setPosition] = useState({});
  const openSubmenu = (text, coordinates) => {
    const submenuToDisplay = sublinks.find((link) => link.page === text);
    setPage(submenuToDisplay);
    setIsSubmenuOpen(true);
    setPosition(coordinates);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
    setPage({ page: '', links: [] });
    setPosition({});
  };
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        page,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        position,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
