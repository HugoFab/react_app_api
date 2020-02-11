import { Episode } from "../model/episode";

export const loadEpisode = (url: string) => {
  return fetch(url).then<Episode>(res => res.json());
};

export async function fecthEpisode(urls: Array<string>) {
  return await Promise.all(
    urls.map(url => fetch(url).then<Episode>(res => res.json()))
  );
}
