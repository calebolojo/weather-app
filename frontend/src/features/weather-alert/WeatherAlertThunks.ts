import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (
    credentials: { email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      //   const response = await api.post("/auth/login", credentials);
      //   return response.data;
      return {};
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message ?? "Login failed");
    }
  },
);

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  // Do nothing for now
});
