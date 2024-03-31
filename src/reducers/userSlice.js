import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      username: "",
      pvd: "",
      email: "",
    },
  },
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
