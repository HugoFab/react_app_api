import { InfoPage } from "../model/InfoPage";

export const loadPageInfo = () => {
  return fetch("https://rickandmortyapi.com/api/character/").then<InfoPage>(
    res => res.json()
  );
};
