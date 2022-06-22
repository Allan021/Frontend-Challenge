import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import { KeyOption, matchSorter } from "match-sorter";
import { useState } from "react";
import { AutoCompleteContextProps, AutoCompleteOption } from "../contexts";
import { lazy } from "../utils";

interface useSearchAutoCompleteProps
  extends Omit<
    AutoCompleteContextProps,
    | "clearResults"
    | "onLocalInputChanged"
    | "getInputProps"
    | "getListboxProps"
    | "getOptionProps"
    | "options"
  > {
  itemsToShow?: number;
  keysToSearch: readonly KeyOption<AutoCompleteOption>[];
  initialValue: string;
  onInputDone?: (event: React.ChangeEvent<{}>, value: string) => void;
  onInputChange?: (event: React.ChangeEvent<{}>, value: string) => void;
  autoCompletSerach?: boolean;
  options: AutoCompleteOption[];
  onSubmit?: (value: string) => void;
}

export const useSearchAutoComplete = ({
  options,
  keysToSearch,
  itemsToShow,
  onInputDoneDelaymsec,
  onInputChange,
  onInputDone,
  initialValue,
  autoCompletSerach,
  onSubmit,
}: useSearchAutoCompleteProps) => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(initialValue);

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    inputValue,
    groupedOptions,
  } = useAutocomplete<AutoCompleteOption>({
    id: "use-autocomplete-demo",
    options,

    autoComplete: !!autoCompletSerach || true,
    open,
    filterOptions: (options, { inputValue }) => {
      if (!inputValue.trim()) {
        return [];
      }

      const optionsToShow = itemsToShow || 8;

      return matchSorter(options, inputValue, {
        keys: keysToSearch,
      }).slice(0, optionsToShow);
    },
    clearOnEscape: false,

    onClose: (e) => {
      setOpen(false);
    },

    onChange: (_, value) => {
      setOpen(false);

      if (!value) return;
      setValue(value.label);
      onSubmit && onSubmit(value?.label);
    },

    inputValue: value,
    onInputChange: (event, value, reason) => {
      if (onInputChange) {
        onInputChange(event, value);
      }

      if (reason === "reset") {
        setValue((prev) => prev.replace(/^\s+/, ""));
        return;
      }
      setValue(value);

      if (!value.trim()) {
        setOpen(false);
        return;
      }

      setOpen(true);
    },
  });

  const showResults = () => {
    setOpen(true);
  };

  const hideResults = () => {
    setOpen(false);
  };

  const clearResults = () => {
    setOpen(false);
    setValue("");
  };

  function onLocalInputChanged(event: React.ChangeEvent<{}>, value: string) {
    if (onInputChange) {
      onInputChange(event, value);
    }
    if (onInputDone) {
      lazy(() => {
        onInputDone(event, value);
      }, onInputDoneDelaymsec ?? 500);
    }
  }

  return {
    open,
    showResults,
    hideResults,
    onLocalInputChanged,
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    searchValue: inputValue,
    groupedOptions,
    clearResults,
  };
};
