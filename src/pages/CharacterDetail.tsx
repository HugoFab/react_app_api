import React from "react";
import { UseCharacter } from "../useEffect/UseCharacter";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { cardViewDetailsStyle } from "../styles/cardViewDetailsStyle";
import ListEpisode from "../components/LIstEpisode";

export default function CharacterDetail() {
  const character = UseCharacter(1);

  const style = cardViewDetailsStyle();

  return (
    <>
      <Card className={style.card}>
        <CardContent>
          <Typography className={style.title} color="textSecondary">
            {character && character.name}
          </Typography>

          <Typography className={style.pos} color="textSecondary">
            <div>
              <img src={character ? character.image : undefined} />
            </div>
            <div>
              <p>Genre : {character && character.gender}</p>
            </div>

            <div>
              <p>Statut : {character && character.status}</p>
            </div>

            <div>
              <p>Species : {character && character.species}</p>
            </div>

            <div>
              <p>Planet : {character && character.origin.name}</p>
            </div>
          </Typography>
        </CardContent>
      </Card>
      <ListEpisode currentCharacter={character} />
    </>
  );
}
