import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "#store";
import { localStorageService, authService, userService } from "#services";
import { generetaAuthError } from "#utils";

export interface UserState {
  userName: string;
  favorites: string[];
  history: string[];
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  userName: localStorageService.getUserName() || "",
  favorites: [],
  history: [],
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
    favoriteAdded: (state, { payload }) => {
      state.favorites.push(payload);
    },
    favoriteRemoved: (state, { payload }) => {
      state.favorites = state.favorites.filter((cardId) => cardId !== payload);
    },
    historyAdded: (state, { payload }) => {
      state.history.push(payload);
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
  favoriteAdded,
  favoriteRemoved,
  historyAdded,
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

export const addFavorite =
  (cardId: string): AppThunk =>
  (dispatch) => {
    dispatch(favoriteAdded(cardId));
  };

export const removeFavorite =
  (cardId: string): AppThunk =>
  (dispatch) => {
    dispatch(favoriteRemoved(cardId));
  };

export const addHisory =
  (history: string): AppThunk =>
  (dispatch) => {
    dispatch(historyAdded(history));
  };

export const getUserLoadingStatus = (state: RootState) => state.user.isLoading;
export const getUserLoggedInStatus = (state: RootState) =>
  state.user.isLoggedIn;
export const getAuthError = (state: RootState) => state.user.error;

export default userSlice.reducer;
