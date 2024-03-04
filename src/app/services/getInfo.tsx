import { fetchResponse, getURLWithParams } from "./globalConsts/globalConst";
import { url, options } from "./globalConsts/fetchParams";
import {optionalParamsInfo} from './interfaces/globalInterface'



export default async function getInfo(optionalParams?: optionalParamsInfo) {
  const infoUrl = url + "info";

  if (!optionalParams) {
    return fetchResponse(infoUrl, options)
  }
  getURLWithParams(optionalParams, infoUrl)
}
