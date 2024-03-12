import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "#store";
import { localStorageService, authService, userService } from "#services";
import { generetaAuthError } from "#utils";
import { CardData } from "../../services/api.service";

export interface History {
  cardSet: string;
  name: string;
  searchParams: string;
}

export interface UserState {
  userName: string;
  favorites: CardData[];
  history: History[];
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  userName: localStorageService.getUserName() || "",
  favorites: [],
  history: [],
  isLoggedIn: !!localStorageService.getUserName(),
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
    userDataRequested: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    userDataRequestSuccess: (state, { payload }) => {
      state.userName = payload.name;
      state.favorites = payload.favorites || [];
      state.history = payload.history || [];
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = "";
    },
    userDataRequestFailed: (state, { payload }) => {
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
      state.favorites = state.favorites.filter(
        (card) => card.cardId !== payload
      );
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
  userDataRequested,
  userDataRequestSuccess,
  userDataRequestFailed,
  userLogout,
  favoriteAdded,
  favoriteRemoved,
  historyAdded,
  errorCleaned,
} = userSlice.actions;

export const loadUserData = (): AppThunk => async (dispatch) => {
  try {
    dispatch(userDataRequested());
    const { content } = await userService.getUserData();
    dispatch(userDataRequestSuccess(content));
  } catch (error) {
    if (error instanceof Error)
      dispatch(userDataRequestFailed(generetaAuthError(error.message)));
  }
};

export const logIn =
  (email: string, password: string, redirect: () => void): AppThunk =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const authData = await authService.login({ email, password });
      localStorageService.setTokens(authData);
      const { content } = await userService.getUserData();
      localStorageService.setUserName(content.name);
      dispatch(authRequestSuccess(content));
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
      await userService.create({
        _id: data.localId,
        name,
        email,
        favorites: [],
        history: [],
      });
      localStorageService.setTokens(data);
      localStorageService.setUserName(name);
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
  (id: string): AppThunk =>
  async (dispatch, getSate) => {
    const card = getSate().cards.entities.find(
      (element) => element.cardId === id
    );
    dispatch(favoriteAdded(card));
    await userService.update({ favorites: getSate().user.favorites });
  };

export const removeFavorite =
  (id: string): AppThunk =>
  async (dispatch, getSate) => {
    dispatch(favoriteRemoved(id));
    await userService.update({ favorites: getSate().user.favorites });
  };

export const addHisory =
  (history: History): AppThunk =>
  async (dispatch, getSate) => {
    dispatch(historyAdded(history));
    await userService.update({ history: getSate().user.history });
  };

export const getUserLoadingStatus = (state: RootState) => state.user.isLoading;
export const getUserLoggedInStatus = (state: RootState) =>
  state.user.isLoggedIn;
export const getAuthError = (state: RootState) => state.user.error;
export const getUserName = (state: RootState) => state.user.userName;
export const getHistory = (state: RootState) => state.user.history;
export const getFavoriteCards = (state: RootState) => state.user.favorites;
export const getCardFavoriteStatus = (id: string) => (state: RootState) =>
  state.user.favorites.some((element) => element.cardId === id);

export default userSlice.reducer;
