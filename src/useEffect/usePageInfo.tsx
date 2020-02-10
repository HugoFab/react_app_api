import { useState, useEffect } from "react";
import { loadPageInfo, loadCharacter } from "../network/LoadPageInfo";
import { InfoPage } from "../model/InfoPage";

export const GetSearchCharacter = (character: string | null, page: number) => {
  const [characters, setCharacters] = useState<InfoPage | null>();
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancel = false;
    if (!cancel && character !== null) {
      loadCharacter(character, page)
        .then(setCharacters)
        .catch(() => setError(true));
    }else if(character === null){
      loadPageInfo(page)
        .then(setCharacters)
        .catch(() => setError(true));
    }

    return () => {
      cancel = true;
    };
  }, [character, page]);

  return characters;
};
