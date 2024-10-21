// Store.js
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './slices/CartSlice';
import CategorySlice from './slices/Category';
import SearchSlice from './slices/SearchSlice';
import UserSlice from './slices/Login'

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    category: CategorySlice,
    search: SearchSlice,
    user: UserSlice,  // Add user slice to store
  },
});

export default Store;
