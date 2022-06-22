import {
  Box,
  Container,
  styled,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { layoutConstant } from "../../utils";
import { FlexBox } from "../flex-box";

// Container for the navbar
export const NavBarWrapper = styled(Box)(({ theme }) => ({
  zIndex: 3,
  position: "relative",
  height: layoutConstant.headerHeight,
  transition: "height 250ms ease-in-out",
  background: theme.palette.background.paper,
  [theme.breakpoints.down("sm")]: {
    height: layoutConstant.mobileHeaderHeight,
  },
}));

interface NavBarProps {
  isFixed?: boolean;
}

export const Header = ({ isFixed = false }: NavBarProps) => {
  const theme = useTheme();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <NavBarWrapper>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <FlexBox
          sx={{
            mr: "1rem",
            minWidth: "170px",
            alignItems: "center",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ficohsa_logo.png/640px-Ficohsa_logo.png"
              alt="logo ficohsa"
            />
          </Link>
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <TextField label="Buscar" variant="outlined" />
        </FlexBox>
      </Container>
    </NavBarWrapper>
  );
};
