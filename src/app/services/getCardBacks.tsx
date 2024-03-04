import { fetchResponse, getURLWithParams } from "./globalConsts/globalConst";
import { url, options } from "./globalConsts/fetchParams";

interface optionalParams {
  callback?: string;
  locale?: string;
}

export default async function getCardByCardSet(
  optionalParams?: optionalParams
) {
  const cardBackUrl = url + 'cardbacks'
  if (!optionalParams) {
    return fetchResponse(cardBackUrl, options);
  }
  getURLWithParams(optionalParams, cardBackUrl);
}
