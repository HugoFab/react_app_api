import React from "react";
import { UseCharacter } from "../../useEffect/UseCharacter";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { cardViewDetailsStyle } from "../../styles/cardViewDetailsStyle";
import ListEpisode from "../../components/LIstEpisode";

import { useParams } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

export default function CharacterDetail() {
  let { id } = useParams();
  const { character, loading } = UseCharacter(parseInt(id as string));
  console.log(character);

  const style = cardViewDetailsStyle();

  return (
    <div>
      {loading && (
        <div className={"loaderContainer"}>
          <CircularProgress size={100} />
        </div>
      )}
      {character !== null && character !== undefined && !loading && (
        <div className={"detailContainer"}>
          <Card className={style.card}>
            <CardContent>
              <Typography className={style.title} color="textSecondary">
                {character && character.name}
              </Typography>

              <Typography className={style.pos} color="textSecondary">
                <div className={"imageContainer"}>
                  <img src={character ? character.image : undefined} />
                </div>
                <div className={style.text}>
                  <p>
                    <b>Genre :</b> {character && character.gender}
                  </p>

                  <p>
                    <b>Statut :</b> {character && character.status}
                  </p>

                  <p>
                    <b>Species :</b> {character && character.species}
                  </p>
                </div>
              </Typography>
            </CardContent>
          </Card>
          <ListEpisode currentCharacter={character} />
        </div>
      )}
    </div>
  );
}
