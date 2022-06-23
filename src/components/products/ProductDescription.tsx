import { Box } from "@mui/material";
import { H3 } from "../ui/typography";

interface Props {
  specifications: string[];
}
export const ProductDescription = ({ specifications }: Props) => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
        {specifications.map((specification, i) => (
          <Box key={i}>{specification}</Box>
        ))}
      </Box>
    </Box>
  );
};
