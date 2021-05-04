import React, {useReducer, useEffect} from 'react';

// keep track of all items a cart
// save items to browser cookie
// check browser cookie after first render

const actions = {
  CHANGE: 'CHANGE',
  REMOVE: 'REMOVE',
};

const initialState = {
  products: [],
  total: 0,
};

function reducer(state, action) {
  switch(action.type) {
    case actions.CHANGE:
      return state;
    case actions.REMOVE: 
      return state;
    default: return state;
  }
};

const CartContext = React.createContext();

function CartProvider ({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // check cookie
    console.log('cart provider useeffect');
  }, []);

  useEffect(() => {
    // update cookie
  }, [state]);

  return <CartContext.Provider value={{state, dispatch}}>{children}</CartContext.Provider>
};

function useCartContext() {
  const context = React.useContext(CartContext);

  if (context === undefined) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export {CartProvider, useCartContext, actions};