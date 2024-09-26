// src/redux/actions/favoriteActions.js
// actionTypes.js

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';



// Remove the following import statement
// import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './actionTypes';

export const addToFavorites = (item) => ({
  type: ADD_TO_FAVORITES,
  payload: item,
});

export const removeFromFavorites = (itemId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: itemId,
});
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});