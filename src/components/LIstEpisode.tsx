import React, { useState } from "react";
import { Character } from "../model/character";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { cardViewDetailsStyle } from "../styles/cardViewListeEpisodeStyle";

import { Episode } from "../model/episode";
import { url } from "inspector";
import { fetchEpisode } from "../network/loadEpisode";

export type ListEpisodeProps = {
  currentCharacter: Character | null;
};

const ListEpisode: React.FC<ListEpisodeProps> = ({ currentCharacter }) => {
  const style = cardViewDetailsStyle();

  const [listEpisode, setListEpisode] = useState<Array<Episode>>();

  if (currentCharacter) {
    fetchEpisode(currentCharacter.episode).then((res: Array<Episode>) =>
      setListEpisode(res)
    );
  }



  return (
    <Card className={style.card}>
      <CardContent>
        <Typography className={style.title} color="textSecondary">
          Episodes
        </Typography>

        <Typography className={style.pos} color="textSecondary">
          <div className={style.text}>
            {listEpisode &&
              listEpisode.map(episode => <div>{episode.name}</div>)}
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ListEpisode;
