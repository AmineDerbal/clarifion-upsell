import { configureStore } from '@reduxjs/toolkit';
import screenReducer from './screen/screenSlice';

const store = configureStore({
  reducer: {
    screen: screenReducer,
  },
});

export default store;
