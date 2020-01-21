import {PageInfo} from "../model/pageInfo";
import {Character} from "../model/character";

export const loadCharacterList = () => {
    return fetch("https://rickandmortyapi.com/api/character/").then<PageInfo>(res =>
        res.json()
    );
};

export const loadCharacter = (id: number) => {
    return fetch("https://rickandmortyapi.com/api/character/" + id).then<Character>(res => res.json());
};

