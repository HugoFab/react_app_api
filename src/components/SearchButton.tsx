import React from "react";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

type ArrowButtonProps = {
  value: string | number;
}

export const SearchButton: React.FC<ArrowButtonProps> = ({value}) => {

    if (value !== '') {
      return (
        <div>
          {
            <Link to={`./characters?name=${value}&page=${1}`}>
              <Button variant="contained" color="primary" onClick={() => null}>
                Go
              </Button>
            </Link>
          }
        </div>
      )
    } else {
      return (
        <div>
          {
            <Link to={`./characters?page=${1}`}>
              <Button variant="contained" color="primary" onClick={() => null}>
                Go
              </Button>
            </Link>
          }
        </div>
      )
    }
  }
;
