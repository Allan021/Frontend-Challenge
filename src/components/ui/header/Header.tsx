import { PersonOutline, ShoppingBagOutlined } from "@mui/icons-material";
import {
  Badge,
  Box,
  Container,
  IconButton,
  styled,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { layoutConstant } from "../../../utils";
import { FlexBox } from "../../flex-box";
import { FicohsaLogo } from "../logo";
import { Search } from "./Search";

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
const cartHandle = (
  <Badge badgeContent={4} color="primary">
    <Box component={IconButton} ml={2.5} bgcolor="grey.200" p={1.25}>
      <ShoppingBagOutlined />
    </Box>
  </Badge>
);
export const Header = ({ isFixed = false }: NavBarProps) => {
  const theme = useTheme();

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
          <FicohsaLogo />
        </FlexBox>

        <FlexBox justifyContent="center" flex="1 1 0">
          <Search />
        </FlexBox>

        <FlexBox
          sx={{
            alignItems: "center",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Box component={IconButton} ml={2} p={1.25} bgcolor="grey.200">
            <PersonOutline />
          </Box>
          {cartHandle}
        </FlexBox>
      </Container>
    </NavBarWrapper>
  );
};
