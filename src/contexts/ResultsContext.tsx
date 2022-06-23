import { createContext, useContext, useEffect } from "react";
import { Product } from "../models";
import { useResultsPage } from "../hooks/";
export interface IResultsState {
  results: Product[];
  loading: boolean;
  view: "grid" | "list";
  toggleView: (view: "grid" | "list") => void;
}
export const ResultsContext = createContext({} as IResultsState);
export const ResultsProvider = ({ children }: any) => {
  const { products, isLoading, view, toggleView } = useResultsPage();

  return (
    <ResultsContext.Provider
      value={{
        results: products,
        loading: isLoading,
        view,
        toggleView,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};
export const useResultsContext = () => {
  const context = useContext(ResultsContext);
  if (!context) {
    throw new Error("useResults must be used within a ResultsProvider");
  }
  return context;
};
