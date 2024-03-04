import { fetchOptions } from "../interfaces/globalInterface";

const url: string = `https://omgvamp-hearthstone-v1.p.rapidapi.com/`;
const options: fetchOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "f20291061amsh0286f75f100c78bp1799c8jsnaaf0a470e237",
    "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
};

export { url, options };
