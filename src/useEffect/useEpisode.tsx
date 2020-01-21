import { useState, useEffect } from "react";
import { Episode } from "../model/episode";
import { loadEpisode } from "../network/loadEpisode";

export const useEpisode = (url: string) => {
  const [episode, setEpisode] = useState<Episode | null>(null);

  useEffect(() => {
    let cancel = false;
    if (!cancel) {
      loadEpisode(url).then(setEpisode);
    }

    return () => {
      cancel = true;
    };
  }, []);

  return episode;
};
