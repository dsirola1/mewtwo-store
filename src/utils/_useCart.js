import React, {useReducer, useEffect} from 'react';

// keep track of all items a cart
// save items to browser cookie
// check browser cookie after first render

const actions = {
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  REMOVE: 'REMOVE',
  ADD: 'ADD',
};

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

function reducer(state, action) {
  console.log('call reducer');
  let products;
  let totalPrice = 0;
  let totalQuantity = 0;
  switch(action.type) {
    case actions.INCREASE:
      // find product with same id in state.products
      // increase quantity by 1
      products = state.products.map(el => el);
      // increase total by price
      totalPrice = state.totalPrice + 1;
      // increase total quantity
      totalQuantity = state.totalQuantity + 1;
      // return updated state
      return {products, totalPrice, totalQuantity};
    case actions.DECREASE:
      // find product with same id in state.products
      // if current product qnt <= 1, remove product
      // else decrease quantity
      products = state.products.map(el => el);
      // decrease total by price
      totalPrice = state.totalPrice - 1;
      // increase total quantity
      totalQuantity = state.totalQuantity - 1;
      return {products, totalPrice, totalQuantity};
    case actions.REMOVE: 
      // find product with same id in state.products
      // remove this product
      // decrease total by price * product qnt
      return {products, totalPrice, totalQuantity};
    case actions.ADD: 
      console.log('call reducer ADD', action.payload);
      console.log('state -->', state);
      // find product with same id in state.products
      let isExist = false;
      // increase product quantity by 1
      products = state.products.map(product => {
        if(product.id === action.payload.id) {
          isExist = true;

          return {
            ...product,
            quantity: product.quantity + 1,
            total: product.total + action.payload.price,
          }
        }
        return product;
      });
      // if product is not found, add whole product to products
      if(!isExist) {
        const newProduct = {
          ...action.payload,
          quantity: 1,
          total: action.payload.price
        }
        products.push(newProduct);
      }
      // increase total price and qnt
      totalPrice = state.totalPrice + Number(action.payload.price);
        totalQuantity = state.totalQuantity + 1;
      console.log('products -->', products, 'total -->', totalPrice, totalQuantity);
      return {products, totalPrice, totalQuantity};
    default: return state;
  }
};

const CartContext = React.createContext();

function CartProvider ({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // check cookie
    console.log('cart provider first useeffect');
  }, []);

  useEffect(() => {
    // update cookie
    console.log('cart provider useeffect, update cookie', state);
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