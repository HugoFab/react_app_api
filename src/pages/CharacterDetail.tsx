import React from 'react'
import {UseCharacter} from "../useEffect/UseCharacter"

export default function CharacterDetail() {

  const character = UseCharacter(1);

  return (
    <div>
      {character && character.name}
    </div>
  )
}
