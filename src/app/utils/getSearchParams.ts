interface SearchParams {
  [key: string]: string | number;
}

export const getSearchParams = <T extends SearchParams>(
  searchParams: T
): string => {
  let searchString: string = "";
  Object.entries(searchParams).forEach(([key, value], index) => {
    searchString += `${index === 0 ? "?" : "&"}${key}=${value}`;
  });
  return searchString;
};
