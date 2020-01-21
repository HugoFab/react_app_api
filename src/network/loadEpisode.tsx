import { Episode } from "../model/episode";

export const loadEpisode = (url: string) => {
  return fetch(url).then<Episode>(res => res.json());
};
