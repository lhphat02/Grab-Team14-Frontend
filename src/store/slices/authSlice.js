import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  login,
  signUp,
  resetPassword,
  setNewPassword,
} from "@app/api/auth.api";
import { setUser } from "@app/store/slices/userSlice";
import {
  deleteToken,
  deleteUser,
  persistToken,
  readToken,
} from "@app/services/localStorage.service";
import Cookies from "js-cookie";

const initialState = {
  token: readToken(),
};

export const doLogin = createAsyncThunk(
  "auth/doLogin",
  async (loginPayload, { dispatch }) => {
    console.log('loginPayload', loginPayload  );
    const res = await login(loginPayload);
    //dispatch(setUser(res.user));
    //persistToken(res.accessToken);
    // Cookies.set('refreshToken', res.refreshToken, { expires: 30 });
    // Cookies.set('accessToken', res.accessToken, { expires: 1 });

    // return res.accessToken;
  }
);

export const doSignUp = createAsyncThunk(
  "auth/doSignUp",
  async (signUpPayload) => signUp(signUpPayload)
);

export const doResetPassword = createAsyncThunk(
  "auth/doResetPassword",
  async (resetPassPayload) => resetPassword(resetPassPayload)
);

export const doVerifySecurityCode = createAsyncThunk(
  "auth/doVerifySecurityCode",
  async (securityCodePayload) => verifySecurityCode(securityCodePayload)
);

export const doSetNewPassword = createAsyncThunk(
  "auth/doSetNewPassword",
  async (newPasswordData) => setNewPassword(newPasswordData)
);

export const doLogout = createAsyncThunk(
  "auth/doLogout",
  async (payload, { dispatch }) => {
    deleteToken();
    deleteUser();
    dispatch(setUser(null));
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doLogin.fulfilled, (state, action) => {
      state.token = action.payload;
    });
    builder.addCase(doLogout.fulfilled, (state) => {
      state.token = null;
    });
  },
});

export default authSlice.reducer;
