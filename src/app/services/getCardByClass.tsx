import { getCardsByCustomParams } from "./globalConsts/globalConst";
import { optionalParams } from "./interfaces/globalInterface";

export default async function getCardByClass(
  className: string,
  optionalParams?: optionalParams
) {
  const classNameUrl = 'cards/classes/' + className
  getCardsByCustomParams(classNameUrl, optionalParams)
}
