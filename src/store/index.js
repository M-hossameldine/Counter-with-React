import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

// Counter slice reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state = state.counter + 1;
    },
    decrease(state, action) {
      state = state.counter - 1;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
