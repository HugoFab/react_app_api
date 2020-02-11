import React, {useState} from "react";
import {GetSearchCharacter} from "../../useEffect/usePageInfo";
import {Link} from "react-router-dom";
import "./list.css"
import CharacterItem from '../../components/characterItem/CharacterItem'
import useQuery from "../../tools/useQuery";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {SearchButton} from '../../components/SearchButton'
import {NextPreviousButton} from '../../components/NextPreviousButton'
import {CircularProgress} from "@material-ui/core";

const ListCharacter = () => {

  let querry = useQuery();
  const page: number | null = parseInt(querry.get('page') as string);

  const character: string | null = querry.get('name');

  const [searchTerms, setSearchTerms] = useState<string>(character !== null ? character : '');

  const {characters, loading} = GetSearchCharacter(character, page);

  return (
    <div className={'container'}>
      <div className={'searchBarContainer'}>
        <div className={'searchBar'}>
          <div className={'searchIcon'}>
            <SearchIcon/>
          </div>
          <InputBase
            placeholder="Search…"
            value={searchTerms}
            onChange={(value) => setSearchTerms(value.target.value)}
            inputProps={{'aria-label': 'search'}}
          />
          <SearchButton value={searchTerms}/>
        </div>
      </div>
      <NextPreviousButton previousDisable={page - 1 === 0}
                          nextDisable={page === characters?.info.pages}
                          currentPage={page} characterName={character}/>
      {
        loading &&
        <div className={'loaderContainer'}>
            <CircularProgress />
        </div>
      }
      { !loading &&
      <div className={"list"}>
        {
          character !== undefined && characters && characters.results.map(res =>
            <div key={res.id}>
              <Link to={`/character/${res.id}`}
                    style={{textDecoration: 'none', color: 'inherit'}}>
                <div className={"listItem"}>
                    <CharacterItem character={res}/>
                </div>
              </Link>
            </div>
          )
        }
      </div>}
      <NextPreviousButton previousDisable={page - 1 === 0}
                          nextDisable={page === characters?.info.pages}
                          currentPage={page} characterName={character}/>
    </div>
  )
};

export default ListCharacter;
