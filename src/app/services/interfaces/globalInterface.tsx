export interface optionalParams {
    [index: string]: any;
    health?: number;
    durability?: number;
    cost?: number;
    attack?: number;
    callback?: string;
    collectible?: number;
    locale?: string;
}

export interface optionalParamsForSearch {
    callback?: string,
    collectible?: number,
    locale?: string,
}

export interface optionalParamsInfo {
  callback?: string;
  locale?: string;
}

export interface fetchOptions {
    method: string;
    headers: {
      "X-RapidAPI-Key": string;
      "X-RapidAPI-Host": string;
    };
  };