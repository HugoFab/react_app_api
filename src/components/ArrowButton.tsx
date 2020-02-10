import React from "react"
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

type ArrowButtonProps = {
  value: string | number
  index: number
  character: string | null
  disable: boolean
}

const ArrowButton: React.FC<ArrowButtonProps> = ({value, index, character, disable}) => {
  console.log('index: ' + index);
  return (
    <div>
      {
        !disable &&
        <Link to={
          character === null || character === ''
            ? `./characters?page=${isNaN(index) || index <=0 ? 2 : index}`
            : `./characters?name=${character}&page=${isNaN(index) || index <=0 ? 2 : index}`
        }>
          <Button variant="contained" color="primary" onClick={() => null}>
            {value}
          </Button>
        </Link>
      }
      {
       disable &&
        <Button variant="contained" color="primary" onClick={() => null} disabled={true}>
          {value}
        </Button>
      }
    </div>

  )
};

export default ArrowButton
