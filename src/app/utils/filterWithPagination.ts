import { CardData } from "#services";

export interface Filter {
  [key: string]: string;
}

export const filterWithPagination = (
  filter: Filter,
  page: number,
  data: CardData[]
) => {
  const filterArray = Object.entries(filter).filter(([key, value]) =>
    Boolean(value)
  );

  const filteredData = data.filter((element) => {
    return filterArray.every(([key, value]) => {
      if (key === "name") {
        const regExp = new RegExp(value, "i");
        return regExp.test(element.name);
      } else {
        return element[key] ? element[key].toString() === value : false;
      }
    });
  });
  const startIndex = (page - 1) * 15;

  return {
    countItems: filteredData.length,
    filteredData: filteredData.splice(startIndex, 15),
  };
};
