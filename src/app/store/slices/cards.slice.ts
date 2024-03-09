import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "#store";
import { Card, apiService } from "../../services/api.service";
import locale from "../../ruLocale.json";

interface Filters {
  classes: string[];
  races: string[];
  factions: string[];
  sets: string[];
  types: string[];
  qualities: string[];
  standart: string[];
  wild: string[];
}
export interface CardsState {
  entities: Card[];
  filters: Filters;
  currentCard: Card | null;
  isLoading: boolean;
  error: string;
}

const initialState: CardsState = {
  entities: [],
  filters: {
    classes: [],
    races: [],
    factions: [],
    sets: [],
    types: [],
    qualities: [],
    standart: [],
    wild: [],
  },
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
      state.filters = payload;
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
    const { data } = await apiService.getAllCard({ collectible: 1 });
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
    const mapData = {
      classes: data.classes.map((element) => ({
        value: element,
        label: locale.classes[element] || element,
      })),
      qualities: data.qualities.map((element) => ({
        value: element,
        label: locale.qualities[element] || element,
      })),
      races: data.races.map((element) => ({
        value: element,
        label: locale.races[element] || element,
      })),
      sets: data.sets.map((element) => ({
        value: element,
        label: locale.sets[element] || element,
      })),
      types: data.types.map((element) => ({
        value: element,
        label: locale.types[element] || element,
      })),
    };
    dispatch(cardsInfoRequestSuccess(mapData));
  } catch (error) {
    if (error instanceof Error) dispatch(cardsRequestFailed(error.message));
  }
};

export const getAllCard = (state: RootState) => state.cards.entities;
export const getInfo = (state: RootState) => state.cards;
export const getFilters = (state: RootState) => state.cards.filters;
export const getCardsLoadingStatus = (state: RootState) =>
  state.cards.isLoading;
export const getCardsError = (state: RootState) => state.cards.error;

export default cardsSlice.reducer;
