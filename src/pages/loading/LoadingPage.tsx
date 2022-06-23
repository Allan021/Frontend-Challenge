import { CircularProgress } from "@mui/material";
import { FlexBox } from "../../components/flex-box/FlexBox";
export const LoadingPage = () => {
  return (
    <FlexBox
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={2}
      height="100vh"
    >
      <CircularProgress size={150} />
    </FlexBox>
  );
};
