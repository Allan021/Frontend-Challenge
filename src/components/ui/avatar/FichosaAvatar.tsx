import { Avatar } from "@mui/material";
import {
  border,
  compose,
  sizing,
  spacing,
  styled,
  typography,
} from "@mui/system";
export const FichosaAvatar = styled(Avatar)(
  compose(spacing, typography, sizing, border)
);
