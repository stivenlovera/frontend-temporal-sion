import { configureStore } from '@reduxjs/toolkit';
import storeReducer from './Slices/LoginSlice';

export const storeToken = configureStore({
    reducer: storeReducer
});
