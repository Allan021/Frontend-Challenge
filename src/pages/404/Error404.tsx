import { Button } from "@mui/material";

import { Link, useHistory } from "react-router-dom";
import { FlexBox } from "../../components/flex-box";
import { FichosaImage } from "../../components/images";

export const Error404 = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <FlexBox
      flexDirection="column"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
      px={2}
    >
      <FichosaImage
        src="/assets/svg/404.svg"
        sx={{
          display: "block",
          maxWidth: "320px",
          width: "100%",
          mb: "1.5rem",
        }}
      />
      <FlexBox flexWrap="wrap">
        <Button
          variant="outlined"
          color="primary"
          sx={{
            m: "0.5rem",
          }}
          onClick={handleClick}
        >
          Go Back
        </Button>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            sx={{
              m: "0.5rem",
            }}
          >
            Go to Home
          </Button>
        </Link>
      </FlexBox>
    </FlexBox>
  );
};
