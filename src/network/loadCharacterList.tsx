import { PageInfo } from "../model/pageInfo";

export const loadCharacterList = () => {
  fetch("https://rickandmortyapi.com/api/character/").then<PageInfo>(res =>
    res.json()
  );
};
