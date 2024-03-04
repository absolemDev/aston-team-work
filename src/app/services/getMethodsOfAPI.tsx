import getAllCard from "./getAllCard";
import getCardBacks from "./getCardBacks";
import getCardByClass from "./getCardByClass";
import getCardsByFaction from "./getCardByFaction";
import getCardByCardSet from "./getCardByCardSet";
import getCardByRace from "./getCardByRace";
import getCardByType from "./getCardByType";
import getCardBySearch from "./getSearch";
import getSingleCard from "./getSingleCard";
import getInfo from "./getInfo";
import {
  optionalParams,
  optionalParamsForSearch,
  optionalParamsInfo,
} from "./interfaces/globalInterface";

let urlParams: string = "";
let optionalParams: optionalParams | undefined;
let optionalParamsForSearch: optionalParamsForSearch | undefined;
let optionalParamsInfo: optionalParamsInfo | undefined;

const getMethods = {
  getAllCard: getAllCard(),
  getCardBacks: getCardBacks(),
  getCardByClass: getCardByClass(urlParams, optionalParams),
  getCardsByFaction: getCardsByFaction(urlParams, optionalParams),
  getCardByCardSet: getCardByCardSet(urlParams, optionalParams),
  getCardByRace: getCardByRace(urlParams, optionalParams),
  getCardByType: getCardByType(urlParams, optionalParams),
  getCardBySearch: getCardBySearch(urlParams, optionalParamsForSearch),
  getSingleCard: getSingleCard(urlParams, optionalParamsForSearch),
  getInfo: getInfo(optionalParamsInfo),
};

export { getMethods, urlParams, optionalParams, optionalParamsForSearch };
