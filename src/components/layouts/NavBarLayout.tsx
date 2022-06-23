import { Container } from "@mui/material";
import { NavBar } from "../ui/navbar/";
import { MainLayout } from "./MainLayout";

interface Props {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}
export const NavBarLayout = ({ children, ...rest }: Props) => {
  return (
    <MainLayout navbar={<NavBar />} {...rest}>
      <Container
        sx={{
          my: "3rem",
        }}
      >
        {children}
      </Container>
    </MainLayout>
  );
};
