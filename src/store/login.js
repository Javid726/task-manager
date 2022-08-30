import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: localStorage.getItem('token'),
    isLoggedIn: null,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginHandler: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        logoutHandler: state => {
            state.token = '';
            localStorage.removeItem('token');
        },
        setIsLoggedIn: state => {
            if (state.token !== '' && state.token !== null) {
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
