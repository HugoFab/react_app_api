import {useEffect, useState} from 'react'
import {Character} from "../model/char"

import {loadCharacter} from '../network/loadCharacterList'

export const UseCharacter = (id: number = 1) => {

    const [character, setCharacter] = useState<Character | null>(null);

    useEffect(() => {
        let cancel = false;
        if (!cancel) {
            loadCharacter(id).then(res => setCharacter(res)).catch(res => console.log(res));
        }

        return () => {
            cancel = true;
        };
    }, []);

    return character
};
