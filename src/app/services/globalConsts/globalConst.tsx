import { fetchOptions } from "../interfaces/globalInterface";
import { url, options } from "./fetchParams";

async function fetchResponse(url: string, options: fetchOptions): Promise<any> {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}
// https://.../.../cards/?hearht=10&

async function getURLWithParams(
  optionalParams: any,
  url: string
): Promise<any> {
  const arrOfOptionalParams = Object.keys(optionalParams);
  let urlWithParams: string = url;

  for (let i = 0; i <= arrOfOptionalParams.length; i++) {
    let valueOfParams: string = arrOfOptionalParams[i];
    i !== 0
      ? (urlWithParams += `&${arrOfOptionalParams[i]}=${optionalParams[valueOfParams]}`)
      : (urlWithParams += `?${arrOfOptionalParams[i]}=${optionalParams[valueOfParams]}`)
  }

  return fetchResponse(urlWithParams, options);
}

async function getCardsByCustomParams(
  customFilter: string,
  optionalParams?: any
) {
  const customUrl = url + customFilter;

  if (!optionalParams) {
    return fetchResponse(customUrl, options);
  }
  getURLWithParams(optionalParams, customUrl);
}

export { fetchResponse, getURLWithParams, getCardsByCustomParams };
