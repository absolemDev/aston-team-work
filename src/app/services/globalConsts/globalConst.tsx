import { fetchOptions } from "../interfaces/globalInterface";
import config from "../../config.json";

async function fetchResponse(url: string, options: fetchOptions): Promise<any> {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
}

function getURLWithParams(
  optionalParams: any,
  url: string
): string {
  const arrOfOptionalParams = Object.keys(optionalParams);
  let urlWithParams: string = url;

  for (let i = 0; i <= arrOfOptionalParams.length; i++) {
    let valueOfParams: string = arrOfOptionalParams[i];
    i !== 0
      ? (urlWithParams += `&${arrOfOptionalParams[i]}=${optionalParams[valueOfParams]}`)
      : (urlWithParams += `?${arrOfOptionalParams[i]}=${optionalParams[valueOfParams]}`)
  }

  return urlWithParams
}

async function getCardsByCustomParams(
  customFilter: string,
  optionalParams?: any
) {
  const customUrl = config.url + customFilter;

  if (!optionalParams) {
    return fetchResponse(customUrl, config.options);
  }
  const urlWithParams = getURLWithParams(optionalParams, customUrl);
  fetchResponse(urlWithParams, config.options)
}

export { fetchResponse, getURLWithParams, getCardsByCustomParams };
