import React from 'react'

import {Character} from '../../model/char'

type characterProps = {
  character: Character
};

const CharacterItem: React.FC<characterProps> = ({character}) => {
  return (
    <div className={"character"}>
      <div style={{textAlign: 'center'}}>
        <img
          width={100}
          height={100}
          src={character.image}
          alt=""
        />
      </div>
      <div style={{textAlign: 'center', margin: "auto"}}>
        {character.name}
      </div>
    </div>
  )
};

export default CharacterItem
