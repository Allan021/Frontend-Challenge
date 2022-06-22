import { Box } from "@mui/material";
import { useCallback, useState } from "react";
import { Sticky } from "../stiky";
import { Header } from "../ui";

export const MainLayout = ({ children }: any) => {
  // state
  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);
  return (
    <>
      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header isFixed={isFixed} />
      </Sticky>

      <Box
        position="relative"
        sx={{
          background: "#fff",
        }}
      >
        {children}
      </Box>
    </>
  );
};
