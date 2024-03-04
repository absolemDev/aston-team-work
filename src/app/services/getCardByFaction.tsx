import { getCardsByCustomParams } from "./globalConsts/globalConst";
import { optionalParams } from "./interfaces/globalInterface";

export default async function getCardByClass(
  factionName: string,
  optionalParams?: optionalParams
) {
  const facrionUrl = 'cards/factions/' + factionName
  getCardsByCustomParams(facrionUrl, optionalParams)
}
