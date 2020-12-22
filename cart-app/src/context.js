import React, { useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  cart: [],
  isLoading: false,
  totalPrice: 0,
  totalAmount: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearAll = () => {
    dispatch({ type: 'CLEAR_ALL' });
  };
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const calculateTotals = () => {
    dispatch({ type: 'CALCULATE_TOTALS' });
  };
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  const fetchCart = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: 'SET_CART', payload: { data } });
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: 'SET_LOADING' });
  };
  useEffect(() => {
    calculateTotals();
  }, [state.cart]);
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    calculateTotals();
    fetchCart();
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        removeItem,
        clearAll,
        toggleAmount,
        calculateTotals,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
