import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "#store";
import { Card, apiService } from "../../services/api.service";

export interface CardsState {
  entities: Card[];
  currentCard: Card | null;
  isLoading: boolean;
  error: string;
}

const initialState: CardsState = {
  entities: [],
  currentCard: null,
  isLoading: false,
  error: "",
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    cardsRequested: (state) => {
      state.isLoading = true;
      state.error = "";
    },
    cardsRequestSuccess: (state, { payload }) => {
      state.entities = payload;
      state.isLoading = false;
    },
    singleCardRequestSuccess: (state, { payload }) => {
      state.currentCard = payload;
      state.isLoading = false;
    },
    cardsRequestFailed: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const {
  cardsRequested,
  cardsRequestSuccess,
  singleCardRequestSuccess,
  cardsRequestFailed,
} = cardsSlice.actions;

export const loadAllCards = (): AppThunk => async (dispatch) => {
  try {
    dispatch(cardsRequested());
    const { data } = await apiService.getAllCard();
    dispatch(cardsRequestSuccess(data));
  } catch (error) {
    if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
  }
};

export const loadCardsBacks = (): AppThunk => async (dispatch) => {
  try {
    dispatch(cardsRequested());
    const { data } = await apiService.getCardsBacks();
    dispatch(cardsRequestSuccess(data));
  } catch (error) {
    if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
  }
};

export const loadCardsByClass =
  (className: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(cardsRequested());
      const { data } = await apiService.getCardsByClass(className);
      dispatch(cardsRequestSuccess(data));
    } catch (error) {
      if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
    }
  };

export const loadCardsByFaction =
  (factionName: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(cardsRequested());
      const { data } = await apiService.getCardsByFaction(factionName);
      dispatch(cardsRequestSuccess(data));
    } catch (error) {
      if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
    }
  };

export const loadCardsByCardSet =
  (cardSet: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(cardsRequested());
      const { data } = await apiService.getCardsByCardSet(cardSet);
      dispatch(cardsRequestSuccess(data));
    } catch (error) {
      if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
    }
  };

export const loadCardsByRace =
  (raceName: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(cardsRequested());
      const { data } = await apiService.getCardsByRace(raceName);
      dispatch(cardsRequestSuccess(data));
    } catch (error) {
      if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
    }
  };

export const loadCardsByType =
  (typeName: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(cardsRequested());
      const { data } = await apiService.getCardsByType(typeName);
      dispatch(cardsRequestSuccess(data));
    } catch (error) {
      if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
    }
  };

export const loadCardsBySearch =
  (cardName: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(cardsRequested());
      const { data } = await apiService.getCardsBySearch(cardName);
      dispatch(cardsRequestSuccess(data));
    } catch (error) {
      if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
    }
  };

export const loadSingleCard =
  (cardName: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(cardsRequested());
      const { data } = await apiService.getSingleCard(cardName);
      dispatch(singleCardRequestSuccess(data));
    } catch (error) {
      if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
    }
  };

export const loadInfo = (): AppThunk => async (dispatch) => {
  try {
    dispatch(cardsRequested());
    const { data } = await apiService.getInfo();
  } catch (error) {
    if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
  }
};

export const getCardsLoadingStatus = (state: RootState) => state.user.isLoading;
export const getCards = (state:RootState) => state.cards.entities;
export const getCardsError = (state: RootState) => state.user.error;

export default cardsSlice.reducer;
