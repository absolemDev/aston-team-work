import { getCardsByCustomParams } from "./globalConsts/globalConst";
import { optionalParams } from "./interfaces/globalInterface";

export default async function getCardByRace(
  raceName: string,
  optionalParams?: optionalParams
) {
  const raceUrl = 'cards/races/' + raceName
  getCardsByCustomParams(raceUrl, optionalParams)
}
