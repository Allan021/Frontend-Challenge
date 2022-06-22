import { Container } from "@mui/material";
import { NavBar } from "../ui/navbar/";
import { MainLayout } from "./MainLayout";

interface Props {
  children: React.ReactNode;
}
export const NavBarLayout = ({ children }: Props) => {
  return (
    <MainLayout navbar={<NavBar />}>
      <Container
        sx={{
          my: "2rem",
        }}
      >
        {children}
      </Container>
    </MainLayout>
  );
};
