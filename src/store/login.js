import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  isLoggedIn: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginHandler: (state, action) => {
      state.token = action.payload;
    },
    logoutHandler: state => {
      state.token = '';
    },
    setIsLoggedIn: state => {
      if (state.token !== '') {
        state.isLoggedIn = true;
      } else {
        state.isLoggedIn = false;
      }
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  addUser,
  loginHandler,
  logoutHandler,
  setIsLoggedIn,
} = loginSlice.actions;

export default loginSlice.reducer;
