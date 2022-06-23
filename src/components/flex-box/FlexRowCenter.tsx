import { Box, BoxProps } from "@mui/material";

export const FlexRowCenter = ({ children, ...props }: BoxProps) => (
  <Box display="flex" justifyContent="center" alignItems="center" {...props}>
    {children}
  </Box>
);
