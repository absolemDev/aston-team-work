import { getCardsByCustomParams } from "./globalConsts/globalConst";
import { optionalParamsForSearch } from "./interfaces/globalInterface";

export default async function getSingleCard(
  singleCardName: string,
  optionalParams?: optionalParamsForSearch
) {
  const singleCardUrl = 'cards/' + singleCardName
  getCardsByCustomParams(singleCardUrl, optionalParams)
}
