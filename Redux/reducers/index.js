// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import favoriteReducer from './favoritesreducer';
import cartReducer from './favoritesreducer';  // Import the cart reducer

const rootReducer = combineReducers({
  favorites: favoriteReducer,
  cart: cartReducer,  // Include the cart reducer
});

export default rootReducer;
