// src/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // Add your feature reducers here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
