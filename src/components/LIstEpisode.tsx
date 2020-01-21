import React from "react";
import { Character } from "../model/character";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { cardViewDetailsStyle } from "../styles/cardViewListeEpisodeStyle";
import { useEpisode } from "../useEffect/useEpisode";
import { Episode } from "../model/episode";

export type ListEpisodeProps = {
  currentCharacter: Character | null;
};

const loadEpisode = (character: Character | null): Array<Episode> => {
  var episodes: Array<Episode> = [];
  if (character) {
    character.episode.map(url => episodes.push(useEpisode(url)));
  }
  return episodes;
};

const ListEpisode: React.FC<ListEpisodeProps> = ({ currentCharacter }) => {
  const style = cardViewDetailsStyle();

  return (
    <Card className={style.card}>
      <CardContent>
        <Typography className={style.title} color="textSecondary">
          Episodes
        </Typography>

        <Typography className={style.pos} color="textSecondary">
          <div className="listCara">
            {currentCharacter &&
              currentCharacter.episode.map((url: any) => (
                <div>{useEpisode(url)}</div>
              ))}
            }
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ListEpisode;
