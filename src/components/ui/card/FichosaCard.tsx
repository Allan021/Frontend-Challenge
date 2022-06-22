import { Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface Props extends CardProps {
  hoverEffect?: boolean;
  children: React.ReactNode;
}

export const FichosaCard = styled(
  ({ hoverEffect, children, ...rest }: Props) => (
    <Card {...rest}>{children}</Card>
  )
)(({ theme, hoverEffect }) => ({
  borderRadius: "8px",
  overflow: "unset",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    boxShadow: hoverEffect ? theme.shadows[3] : "",
  },
}));
