import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    updatePlan: (state, action) => {
      state.user.plan = action.payload;
    }
  }
});

export const { login, logout, updatePlan } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
