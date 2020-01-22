import React from "react"
import {Link} from "react-router-dom";

type ArrowButtonProps = {
  value: string | number
  index: number
}

const ArrowButton: React.FC<ArrowButtonProps> = ({value, index}) => {

  return (

    <Link to={`./characters?page=${index!== 1? index-1: index}`}>
      <button onClick={() => null}>
        {value}
      </button>
    </Link>
  )
};

export default ArrowButton
