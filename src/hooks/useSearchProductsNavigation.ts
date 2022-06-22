import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSearchByUrl } from "./useSeachByUrl";

export const useSearchProductsNavigation = () => {
  const [searching, setSearching] = useState<boolean>(false);

  const { search, handleChangeUrl } = useSearchByUrl({
    search: "",
  });

  const handleSearch = (search: string) => {
    handleChangeUrl(search, "search", "items");
  };

  return {
    handleSearch,
    searching,
    search,
  };
};
