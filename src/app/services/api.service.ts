import axios, { AxiosError, AxiosResponse } from "axios";
import config from "../config.json";
import locale from "../ruLocale.json";
import { getSearchParams } from "../utils/getSearchParams";

interface OptionalParams {
  [key: string]: string | number;
}

export interface Card {
  [x: string]: any;
  cardId: string;
  name: string;
  cardSet: string;
  type: string;
  faction?: string;
  rarity: string;
  cost: number;
  attack?: number;
  health?: number;
  race?: string;
  playerClass?: string;
  img?: string;
  text?: string;
  flavor?: string;
  artist?: string;
  elite?: string;
}

const api = axios.create({
  baseURL: config.apiEndpoint,
  headers: { ...config.apiHeaders },
});

api.interceptors.response.use(
  (res: AxiosResponse<Card[]>) => {
    if (res.data instanceof Array)
      res.data = res.data.filter((item) => !!item.img);
    return res;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

const getURLWithParams = (
  url: string,
  optionalParams?: OptionalParams
): string => {
  let urlWithParams: string = config.apiEndpoint + url;
  if (optionalParams) urlWithParams += getSearchParams(optionalParams);
  return urlWithParams;
};

const getAllCard = async (optionalParams?: OptionalParams) => {
  const url = "cards";
  return await api.get(getURLWithParams(url, optionalParams));
};

const getCardsBacks = async (optionalParams?: OptionalParams) => {
  const url = "cardbacks";
  return await api.get(getURLWithParams(url, optionalParams));
};

const getCardsByClass = async (
  className: string,
  optionalParams?: OptionalParams
) => {
  const url = "cards/classes/" + className;
  return await api.get(getURLWithParams(url, optionalParams));
};

const getCardsByFaction = async (
  factionName: string,
  optionalParams?: OptionalParams
) => {
  const url = "cards/factions/" + factionName;
  return await api.get(getURLWithParams(url, optionalParams));
};

const getCardsByCardSet = async (
  cardSet: string,
  optionalParams?: OptionalParams
) => {
  const url = "cards/sets/" + cardSet;
  return await api.get(getURLWithParams(url, optionalParams));
};

const getCardsByRace = async (
  raceName: string,
  optionalParams?: OptionalParams
) => {
  const url = "cards/races/" + raceName;
  return await api.get(getURLWithParams(url, optionalParams));
};

const getCardsByType = async (
  typeName: string,
  optionalParams?: OptionalParams
) => {
  const url = "cards/types/" + typeName;
  return await api.get(getURLWithParams(url, optionalParams));
};

const getCardsBySearch = async (
  cardName: string,
  optionalParams?: OptionalParams
) => {
  const url = "cards/search/" + cardName;
  return await api.get(getURLWithParams(url, optionalParams));
};

const getSingleCard = async (
  singleCardName: string,
  optionalParams?: OptionalParams
) => {
  const url = "cards/" + singleCardName;
  return await api.get(getURLWithParams(url, optionalParams));
};

type ClassesKey = keyof typeof locale.classes;
type QualitiesKey = keyof typeof locale.qualities;
type RacesKey = keyof typeof locale.races;
type SetsKey = keyof typeof locale.sets;
type TypesKey = keyof typeof locale.types;

interface FiltersData {
  classes: ClassesKey[];
  qualities: QualitiesKey[];
  races: RacesKey[];
  sets: SetsKey[];
  types: TypesKey[];
}

const getInfo = async (
  optionalParams?: OptionalParams
): Promise<axios.AxiosResponse<FiltersData>> => {
  const url = "info";
  return await api.get(getURLWithParams(url, optionalParams));
};

const apiService = {
  getAllCard,
  getCardsBacks,
  getCardsByClass,
  getCardsByFaction,
  getCardsByCardSet,
  getCardsByRace,
  getCardsByType,
  getCardsBySearch,
  getSingleCard,
  getInfo,
};

export { apiService };
