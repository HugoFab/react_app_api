import React from 'react'
import {UseCharacter} from "../useEffect/UseCharacter"
import {Character} from "../model/character";


export default function CharacterDetail() {

    const character = UseCharacter(1);

    return (
        <div>
            {character && character.name}
        </div>
    )
}
