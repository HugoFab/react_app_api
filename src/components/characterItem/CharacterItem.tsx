import React, {useRef, useState} from 'react'
import {CircularProgress} from "@material-ui/core";
import "./CharacterItem.css"
import {Character} from '../../model/char'
import red from '@material-ui/core/colors/red';

type characterProps = {
  character: Character
};

const CharacterItem: React.FC<characterProps> = ({character}) => {

  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    console.log(counter.current);
    if (counter.current >= 1) {
      setLoading(false);
    }
  };

  return (
    <div className={"character"}>
      <div className={'imageContainer'}>
        {
          loading &&
            <div className={'loaderContainer'}>
              <CircularProgress className={'loader'} />
            </div>
        }
        <img
          width={100}
          height={loading?50:100}
          style={{marginTop: 10}}
          src={character.image}
          onLoad={imageLoaded}
          alt=""
        />
      </div>
      <div style={{textAlign: 'center', margin: "auto", color: 'white', marginTop: 5}}>
        {character.name}
      </div>
    </div>
  )
};

export default CharacterItem
