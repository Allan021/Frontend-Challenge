import { AutoCompleteSearchBox } from "../search-autocomplete";
import { useSearchContext } from "../../../contexts";
export const Search = () => {
  const { search, handleSearch } = useSearchContext();
  return (
    <AutoCompleteSearchBox
      initialValue={search || ""}
      onSearch={handleSearch}
      items={dummyData}
    />
  );
};

const dummyData = [
  {
    label: "Ficohsa",
    value: "Ficohsa",
  },
  {
    label: "Pepsi",
    value: "Pepsi",
  },
  {
    label: "Coca-Cola",
    value: "Coca-Cola",
  },
  {
    label: "Coca-Cola Zero",
    value: "Coca-Cola Zero",
  },
  {
    label: "Coca-Cola Light",
    value: "Coca-Cola Light",
  },
  {
    label: "Coca-Cola Zero Light",

    value: "Coca-Cola Zero Light",
  },
];
