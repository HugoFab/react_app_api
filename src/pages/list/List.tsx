import React from "react";
import {usePageInfo} from "../../useEffect/usePageInfo";
import {Link} from "react-router-dom";
import "./list.css"
import CharacterItem from '../../components/characterItem/CharacterItem'
import ArrowButton from '../../components/ArrowButton'
import useQuery from "../../tools/useQuery";

type ListCharacterProps= {
  page: number
}

const ListCharacter: React.FC<ListCharacterProps> = ({page}) => {
  const data = usePageInfo();

  let querry = useQuery()

  return (
    <div>
      <div className={"list"}>
        {data && data.results.map(res =>
          <Link to={`/character/${res.id}`}
                style={{textDecoration: 'none', color: 'inherit'}}>
            <div className={"listItem"}>
              <CharacterItem character={res}/>
            </div>
          </Link>)}
      </div>
      <div>
        {
          data !== null &&
          <ArrowButton value={"<"} index={page}/>
        }
      </div>
    </div>
  )
};

export default ListCharacter;
