import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  user: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const weatherAlertSlice = createSlice({
  name: "weatherAlert",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder: any) => {},
});

export const { clearError } = weatherAlertSlice.actions;
export default weatherAlertSlice.reducer;
