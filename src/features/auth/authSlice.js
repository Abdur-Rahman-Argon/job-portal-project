import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase.init";

const initialState = {
  user: {
    email: "",
    role: "",
  },
  isLoading: true,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "auth/createUser",
  async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // sign in user
    builder.addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.user.email = action.payload.user.email;
      state.isLoading = false;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.user.email = "";
      state.user.role = "";
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
