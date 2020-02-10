import React from "react";
import ArrowButton from "./ArrowButton";

type NextPreviousButtonProps = {
  previousDisable: boolean
  nextDisable: boolean
  currentPage: number
  characterName: string | null
}

export const NextPreviousButton: React.FC<NextPreviousButtonProps> = ({previousDisable, nextDisable, currentPage, characterName}) => {
  return (
    <div className={"nextPreviousButton"}>
      {
        // data !== null &&
        <div className={'buttonContainer'}>
          <div className={'button'}>
            <ArrowButton value={"<"} index={currentPage - 1} character={characterName}
                         disable={previousDisable}/>
          </div>
          <div className={'button'}>
            <ArrowButton value={">"} index={currentPage + 1} character={characterName}
                         disable={nextDisable}/>
          </div>
        </div>
      }
    </div>
  )
};
