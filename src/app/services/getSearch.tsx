import { getCardsByCustomParams } from "./globalConsts/globalConst";
import { optionalParamsForSearch } from "./interfaces/globalInterface";

export default async function getCardBySearch(
  cardName: string,
  optionalParams?: optionalParamsForSearch
) {
  const cardNameUrl = 'cards/search/' + cardName
  getCardsByCustomParams(cardNameUrl, optionalParams)
}
