import React from "react";
import { usePageInfo } from "../useEffect/usePageInfo";

const ListCharacter: React.FC = () => {
  const data = usePageInfo();

  return <div>{data && data.results.map(res => res.id)}</div>;
};

export default ListCharacter;
