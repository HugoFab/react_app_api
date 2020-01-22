import { Character } from "./char";

export type InfoPage = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
};
