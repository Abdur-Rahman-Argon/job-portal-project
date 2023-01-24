import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
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

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data;
  }
);

export const getUser = createAsyncThunk("auth/getUser", async (email) => {
  const res = await fetch(`${process.env.REACT_APP_PRO_URL}/user/${email}`);
  const data = await res.json();
  if (data.status) {
    return data;
  } else {
    return email;
  }
});

export const googleUser = createAsyncThunk("auth/googleUser", async () => {
  const provider = new GoogleAuthProvider();
  const data = await signInWithPopup(auth, provider);
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = {
        email: "",
        role: "",
      };
      state.isLoading = false;
    },
    exitsUser: (state, action) => {
      state.user.email = action.payload.email;
      state.isLoading = false;
    },
  },
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

    // login user
    builder.addCase(loginUser.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user.email = action.payload.user.email;
      state.isLoading = false;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.user.email = "";
      state.user.role = "";
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    // Google login user
    builder.addCase(googleUser.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(googleUser.fulfilled, (state, action) => {
      state.user.email = action.payload.user.email;
      state.isLoading = false;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(googleUser.rejected, (state, action) => {
      state.user.email = "";
      state.user.role = "";
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });

    //  get user from db
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      if (payload.status) {
        state.user = payload.data;
      } else {
        state.user.email = payload;
      }
      state.isLoading = false;
      state.isError = false;
      state.error = "";
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.user.email = "";
      state.user.role = "";
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export const { logout, exitsUser } = authSlice.actions;
export default authSlice.reducer;
