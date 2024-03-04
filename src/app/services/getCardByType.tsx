import { getCardsByCustomParams } from "./globalConsts/globalConst";
import { optionalParams } from "./interfaces/globalInterface";

export default async function getCardByType(
  typeName: string,
  optionalParams?: optionalParams
) {
  const typeUrl = 'cards/types/' + typeName
  getCardsByCustomParams(typeUrl, optionalParams)
}
