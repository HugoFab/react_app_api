import {useEffect, useState} from 'react'
import {Character} from "../model/character"

import {loadCharacter} from '../network/loadCharacterList'

export const UseCharacter = (id: number) => {

    const [character, setCharacter] = useState<Character | null>(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let cancel = false;

        if (!cancel) {
            setLoading(true);
            loadCharacter(id).then((res) =>
            {
              setCharacter(res);
              setLoading(false);
            }
            ).catch(res => console.log(res));
        }

        return () => {
            cancel = true;
        };
    }, [id]);

    return {character, loading}
};
