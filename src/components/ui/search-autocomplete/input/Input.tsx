import { SearchAutoCompleteInput } from ".";
import { useAutoCompleteContext } from "../../../../contexts";
export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
}

export const Input = ({ className, style }: InputProps) => {
  const { textFieldClassName, getInputProps } = useAutoCompleteContext();

  return (
    <SearchAutoCompleteInput
      className={textFieldClassName || className}
      style={style}
      {...getInputProps()}
    />
  );
};
