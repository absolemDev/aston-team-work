import { getCardsByCustomParams } from "./globalConsts/globalConst";
import { optionalParams } from "./interfaces/globalInterface";

export default async function getCardByCardSet(
  cardSet: string,
  optionalParams?: optionalParams
) {
  const cardSetUrl = 'cards/sets/' + cardSet 
  getCardsByCustomParams(cardSetUrl, optionalParams)
}
