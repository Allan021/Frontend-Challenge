import { useAutoCompleteContext } from "../../../../contexts";
import { uuidv4 } from "../../../../utils";
import { ResultsList, ResultImage } from "./";
export interface ListResultsProps {
  className?: string;
  style?: React.CSSProperties;
  bgColor?: string;
}

export const ListResults = ({
  className,
  style,
  bgColor,
}: ListResultsProps) => {
  const { getListboxProps, options, getOptionProps } = useAutoCompleteContext();

  if (!options.length) {
    return null;
  }

  return (
    <ResultsList
      {...getListboxProps()}
      className={className}
      style={{ ...style, backgroundColor: bgColor }}
    >
      {options.map((option, index) => (
        <li
          {...getOptionProps({
            option,
            index,
          })}
          key={`ar${uuidv4()}`}
        >
          <div>
            <p>{option.label}</p>
          </div>
        </li>
      ))}
    </ResultsList>
  );
};
