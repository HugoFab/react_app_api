import { useState, useEffect } from "react";
import { loadPageInfo } from "../network/LoadPageInfo";
import { InfoPage } from "../model/InfoPage";

export const usePageInfo = () => {
  const [pageInfo, setpageInfo] = useState<InfoPage | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [page, setpage] = useState(0);

  useEffect(() => {
    let cancel = false;
    setLoading(true);
    if (!cancel) {
      loadPageInfo()
        .then(setpageInfo)
        .catch(() => setError(true));
    }

    return () => {
      cancel = true;
    };
  }, []);

  return pageInfo;
};
