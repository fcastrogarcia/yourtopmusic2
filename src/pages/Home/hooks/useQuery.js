import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

const useQuery = () => {
  const [tab, setTab] = useState(0);
  const [type, setType] = useState("artists");

  const { search } = useLocation();
  const history = useHistory();

  let params = new URLSearchParams(search);
  const queryType = params.get("type");
  const queryRange = params.get("range");

  const setQueryParams = (search) => {
    return history.push({
      pathname: "/home",
      search,
    });
  };

  const handleType = () => {
    const nextType = `${type === "artists" ? "tracks" : "artists"}`;
    params.set("type", nextType);
    setQueryParams(params.toString());
  };

  const handleTab = (_, value) => {
    params.set("range", value);
    setQueryParams(params.toString());
  };

  const doValidateRange = (range) => {
    if (range >= 0 && range < 3) return parseInt(range);
    params.set("range", 0);
    setQueryParams(params.toString());
    return 0;
  };

  useEffect(() => {
    if (queryType) setType(queryType);
    if (queryRange) setTab(doValidateRange(queryRange));
  }, [search]);

  return {
    handleType,
    handleTab,
    tab,
    type,
  };
};

export default useQuery;
