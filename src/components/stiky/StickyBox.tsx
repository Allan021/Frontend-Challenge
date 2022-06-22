import { styled } from "@mui/material";
import { slideDown } from "../../utils/animations";

export const StickyBox = styled(
  ({ children, componentHeight, fixedOn, fixed, ...rest }: any) => (
    <div {...rest}>{children}</div>
  )
)(({ theme, componentHeight, fixedOn, fixed }) => ({
  "& .hold": {
    zIndex: 2,
    boxShadow: "none",
    position: "relative",
  },
  "& .fixed": {
    left: 0,
    right: 0,
    zIndex: 1500,
    position: "fixed",
    top: `${fixedOn}px`,
    boxShadow: theme.shadows[2],
    transition: "all 350ms ease-in-out",
    animation: `${slideDown} 400ms ${theme.transitions.easing.easeInOut}`,
  },
  "& + .section-after-sticky": {
    paddingTop: fixed ? componentHeight : 0,
  },
}));
