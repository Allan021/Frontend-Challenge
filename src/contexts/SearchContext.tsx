import { createContext, useContext } from "react";
import { useSearchProductsNavigation } from "../hooks";
export interface ISearchState {
  search: string;
  handleSearch: (search: string) => void;
}
export const SearchContext = createContext({} as ISearchState);
export const SearchProvider = ({ children }: any) => {
  const { search, handleSearch } = useSearchProductsNavigation();
  return (
    <SearchContext.Provider value={{ search, handleSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
