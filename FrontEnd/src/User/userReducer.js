import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  token: null,
  error: null,
  userName: '',
  firstName: '',
  lastName: '',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.userName = action.payload.userName;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.email = null;
      state.token = null;
      state.userName = null;
      state.firstName = null;
      state.lastName = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.email = null;
      state.token = null;
      state.userName = '';
      state.firstName = '';
      state.lastName = '';
      state.error = null;
    },
    setFirstName: (state, action) => {
        state.firstName = action.payload.firstName;
    },
    setLastName: (state, action) => {
        state.lastName = action.payload.lastName;
    },
    setUserName: (state, action) => {
        state.userName = action.payload.userName;
    },
    updateUserName: (state, action) => {
        state.userName = action.payload.userName;
      },
}
});

export const {
    loginSuccess,
    loginFailure,
    logout,
    setUserName,
    setFirstName,
    setLastName,
    updateUserName,
  } = userSlice.actions;
  export default userSlice.reducer;
