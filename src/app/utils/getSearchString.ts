interface SearchParams {
  [key: string]: string | number;
}

export const getSearchString = (searchParams: SearchParams): string => {
  let searchString: string = "";
  Object.entries(searchParams).forEach(([key, value], index) => {
    if (value) searchString += `${index === 0 ? "?" : "&"}${key}=${value}`;
  });
  return searchString;
};
