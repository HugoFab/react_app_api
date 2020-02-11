import {useEffect, useState} from 'react'
import {Character} from "../model/character"

import {loadCharacter} from '../network/loadCharacterList'

export const UseCharacter = (id: number) => {

    const [character, setCharacter] = useState<Character | null>(null);
    console.log('id:' + id);

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
