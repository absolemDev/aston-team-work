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
    method: "GET";
    headers: {
      "X-RapidAPI-Key": "f20291061amsh0286f75f100c78bp1799c8jsnaaf0a470e237";
      "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com";
    };
  };