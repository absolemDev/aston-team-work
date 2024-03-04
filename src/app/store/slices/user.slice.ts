import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "#store";
import { localStorageService, authService, userService } from "#services";
import { generetaAuthError } from "#utils";

export interface UserState {
  userName: string;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  userName: localStorageService.getUserName() || "",
  isLoggedIn: false,
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authRequested: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    authRequestSuccess: (state, { payload }) => {
      state.userName = payload.name;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    authRequestFailed: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    userLogout: (state) => {
      state.userName = "";
      state.isLoggedIn = false;
    },
    errorCleaned: (state) => {
      state.error = "";
    },
  },
});

export const {
  authRequested,
  authRequestSuccess,
  authRequestFailed,
  userLogout,
  errorCleaned,
} = userSlice.actions;

export const logIn =
  (email: string, password: string, redirect: () => void): AppThunk =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const authData = await authService.login({ email, password });
      localStorageService.setTokens(authData);
      const { content } = await userService.getUserData();
      dispatch(authRequestSuccess({ name: content.name }));
      redirect();
    } catch (error) {
      if (error instanceof Error)
        dispatch(authRequestFailed(generetaAuthError(error.message)));
    }
  };

export const signUp =
  (
    name: string,
    email: string,
    password: string,
    redirect: () => void
  ): AppThunk =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register({ email, password });
      await userService.create({ _id: data.localId, name, email });
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess({ name }));
      redirect();
    } catch (error) {
      if (error instanceof Error)
        dispatch(authRequestFailed(generetaAuthError(error.message)));
    }
  };

export const logOut = (): AppThunk => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLogout());
};

export const clearAuthError = (): AppThunk => (dispatch) => {
  dispatch(errorCleaned());
};

export const getUserLoadingStatus = (state: RootState) => state.user.isLoading;
export const getUserLoggedInStatus = (state: RootState) =>
  state.user.isLoggedIn;
export const getAuthError = (state: RootState) => state.user.error;
export const getUserName = (state: RootState) => state.user.userName;

export default userSlice.reducer;
