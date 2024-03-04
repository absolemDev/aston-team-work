import {
  optionalParams,
  optionalParamsForSearch,
  optionalParamsInfo,
} from "./interfaces/globalInterface";
import {
  fetchResponse,
  getCardsByCustomParams,
  getURLWithParams,
} from "./globalConsts/globalConst";
import config from "../config.json";

const getMethods = {
  getAllCard: async function (optionalParams?: optionalParams) {
    const allCardUrl = config.url + "cards";

    if (!optionalParams) {
      return fetchResponse(allCardUrl, config.options);
    }
    const urlWithParams = getURLWithParams(optionalParams, allCardUrl);
    return fetchResponse(urlWithParams, config.options);
  },
  getCardBacks: async function (optionalParams?: optionalParamsInfo) {
    const cardBackUrl = config.url + "cardbacks";
    if (!optionalParams) {
      return fetchResponse(cardBackUrl, config.options);
    }
    const urlWithParams = getURLWithParams(optionalParams, cardBackUrl);
    return fetchResponse(urlWithParams, config.options);
  },
  getCardByClass: async function (
    className: string,
    optionalParams?: optionalParams
  ) {
    const classNameUrl = "cards/classes/" + className;
    return getCardsByCustomParams(classNameUrl, optionalParams);
  },
  getCardsByFaction: async function (
    factionName: string,
    optionalParams?: optionalParams
  ) {
    const facrionUrl = "cards/factions/" + factionName;
    return getCardsByCustomParams(facrionUrl, optionalParams);
  },
  getCardByCardSet: async function (
    cardSet: string,
    optionalParams?: optionalParams
  ) {
    const cardSetUrl = "cards/sets/" + cardSet;
    return getCardsByCustomParams(cardSetUrl, optionalParams);
  },
  getCardByRace: async function (
    raceName: string,
    optionalParams?: optionalParams
  ) {
    const raceUrl = "cards/races/" + raceName;
    return getCardsByCustomParams(raceUrl, optionalParams);
  },
  getCardByType: async function (
    typeName: string,
    optionalParams?: optionalParams
  ) {
    const typeUrl = "cards/types/" + typeName;
    return getCardsByCustomParams(typeUrl, optionalParams);
  },
  getCardBySearch: async function (
    cardName: string,
    optionalParams?: optionalParamsForSearch
  ) {
    const cardNameUrl = "cards/search/" + cardName;
    return getCardsByCustomParams(cardNameUrl, optionalParams);
  },
  getSingleCard: async function (
    singleCardName: string,
    optionalParams?: optionalParamsForSearch
  ) {
    const singleCardUrl = "cards/" + singleCardName;
    return getCardsByCustomParams(singleCardUrl, optionalParams);
  },
  getInfo: async function getInfo(optionalParams?: optionalParamsInfo) {
    const infoUrl = config.url + "info";

    if (!optionalParams) {
      return fetchResponse(infoUrl, config.options);
    }
    const urlWithParams = getURLWithParams(optionalParams, infoUrl);
    return fetchResponse(urlWithParams, config.options);
  },
};

export { getMethods };
