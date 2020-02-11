import {InfoPage} from "../model/InfoPage";
import {Character} from "../model/char";

export const loadCharacterList = () => {
    return fetch("https://rickandmortyapi.com/api/character/").then<InfoPage>(res =>
        res.json()
    );
};

export const loadCharacter = (id: number) => {
    return fetch("https://rickandmortyapi.com/api/character/" + id).then<Character>(res => res.json());
};

