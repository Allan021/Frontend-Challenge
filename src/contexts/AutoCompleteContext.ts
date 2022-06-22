import { AutocompleteGroupedOption } from "@mui/material";
import { createContext, InputHTMLAttributes, useContext } from "react";

export interface AutoCompleteOption {
  label: string;
  value: string;
}

export type AutoCompleteOptionGrouped =
  AutocompleteGroupedOption<AutoCompleteOption>[];

export interface AutoCompleteContextProps {
  getInputProps: () => InputHTMLAttributes<HTMLInputElement>;
  getListboxProps: () => React.HTMLAttributes<HTMLUListElement>;
  getOptionProps: ({
    option,
    index,
  }: {
    option: AutoCompleteOption;
    index: number;
  }) => React.HTMLAttributes<HTMLLIElement>;
  textFieldClassName?: string;
  openResults?: boolean;
  width?: string;
  placeholder?: string;
  suggestDelaymsec?: number;
  options: AutoCompleteOption[];
  onInputDoneDelaymsec?: number;
  onLocalInputChanged: (event: React.ChangeEvent<{}>, value: string) => void;
  initialValue: string;
  clearResults: () => void;
  onSubmit?: (value: string) => void;
}

export const AutoCompleteContext = createContext(
  {} as AutoCompleteContextProps
);

export const useAutoCompleteContext = () => useContext(AutoCompleteContext);
