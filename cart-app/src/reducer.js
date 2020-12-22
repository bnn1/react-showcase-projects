const reducer = (state, action) => {
  const { cart, isLoading, totalAmount, totalPrice } = state;
  if (action.type === 'SET_LOADING') {
    return { ...state, isLoading: !isLoading };
  }
  if (action.type === 'CLEAR_ALL') {
    return { ...state, cart: [] };
  }
  if (action.type === 'REMOVE_ITEM') {
    const cartWithoutItem = cart.filter(
      (item) => item.id !== action.payload.id
    );
    return { ...state, cart: cartWithoutItem };
  }
  if (action.type === 'SET_CART') {
    return { ...state, cart: action.payload.data };
  }
  if (action.type === 'TOGGLE_AMOUNT') {
    const { id, type } = action.payload;
    const cartWithNewAmount = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            amount: type === 'increase' ? item.amount + 1 : item.amount - 1,
          };
        }
        return item;
      })
      .filter((item) => item.amount > 0);
    return { ...state, cart: cartWithNewAmount };
  }

  if (action.type === 'CALCULATE_TOTALS') {
    const { totalAmount, totalPrice } = cart.reduce(
      (acc, item) => {
        return {
          totalAmount: item.amount + acc.totalAmount,
          totalPrice: Number(item.price) * item.amount + acc.totalPrice,
        };
      },
      { totalAmount: 0, totalPrice: 0 }
    );
    return { ...state, totalPrice, totalAmount };
  }

  return state;
};
export default reducer;
