import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "#store";
import { Card, apiService } from "../../services/api.service";

export interface CardsState {
  entities: Card[];
  classes: string[];
  races: string[];
  factions: string[];
  sets: string[];
  currentCard: Card | null;
  isLoading: boolean;
  error: string;
}

const initialState: CardsState = {
  entities: [],
  classes: [],
  races: [],
  factions: [],
  sets: [],
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
    cardsInfoRequestSuccess: (state, { payload }) => {
      state.classes = payload.classes;
      state.races = payload.races;
      state.factions = payload.factions;
      state.sets = payload.sets;
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
  cardsInfoRequestSuccess,
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

export const loadCardsInfo = (): AppThunk => async (dispatch) => {
  try {
    dispatch(cardsRequested());
    const { data } = await apiService.getInfo();
    dispatch(cardsInfoRequestSuccess(data));
  } catch (error) {
    if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
  }
};

export const getCardsClasses = (state: RootState) => state.cards.classes;
export const getCardsFactions = (state: RootState) => state.cards.factions;
export const getCardsRaces = (state: RootState) => state.cards.races;
export const getCardsSets = (state: RootState) => state.cards.sets;
export const getCardsLoadingStatus = (state: RootState) =>
  state.cards.isLoading;
export const getCardsError = (state: RootState) => state.cards.error;

export default cardsSlice.reducer;
