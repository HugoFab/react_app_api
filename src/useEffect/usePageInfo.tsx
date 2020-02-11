import { useState, useEffect } from "react";
import { loadPageInfo, loadCharacter } from "../network/LoadPageInfo";
import { InfoPage } from "../model/InfoPage";
import {Character} from "../model/char";

export const GetSearchCharacter = (characterName: string | null, page: number): {characters: InfoPage | undefined, loading: boolean} => {
  const [characters, setCharacters] = useState<InfoPage>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    if (!cancel && characterName !== null) {
      loadCharacter(characterName, page)
        .then((value) => {
          setCharacters(value);
          setLoading(false)
        } )
        .catch(() => setError(true));
    }else if(characterName === null){
      loadPageInfo(page)
        .then((value) => {
          setCharacters(value);
          setLoading(false)
        } )
        .catch(() => setError(true));
    }

    return () => {
      cancel = true;
    };
  }, [characterName, page]);

  return {characters, loading};
};
