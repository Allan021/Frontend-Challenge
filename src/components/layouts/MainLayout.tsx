import { Box } from "@mui/material";
import { useCallback, useState } from "react";
import { Sticky } from "../stiky";
import { Header } from "../ui";

interface Props {
  children: React.ReactNode;
  navbar?: React.ReactNode;
}

export const MainLayout = ({ children, navbar }: Props) => {
  // state

  const [isFixed, setIsFixed] = useState(false);
  const toggleIsFixed = useCallback((fixed: boolean) => setIsFixed(fixed), []);
  return (
    <>
      <Sticky fixedOn={0} onSticky={toggleIsFixed}>
        <Header isFixed={isFixed} />
      </Sticky>

      {navbar && <div className="section-after-sticky">{navbar}</div>}
      {!navbar ? (
        <div className="section-after-sticky">{children}</div>
      ) : (
        children
      )}
    </>
  );
};
