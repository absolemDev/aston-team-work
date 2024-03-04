import { fetchResponse, getURLWithParams } from "./globalConsts/globalConst";
import { url, options } from "./globalConsts/fetchParams";
import { optionalParams } from "./interfaces/globalInterface";

export default async function getAllCard(optionalParams?: optionalParams) {
  const allCardUrl = url + "cards";

  if (!optionalParams) {
    return fetchResponse(allCardUrl, options);
  }
  getURLWithParams(optionalParams, allCardUrl);
}
