import { MainLayout } from "../../components/layouts";
import { HomeSlider, HomeSection } from "./components/";

const HomePage = () => {
  return (
    <MainLayout title="Home | Challenge" subtitle="Tu mejor amigo">
      <HomeSlider />
      <HomeSection />
    </MainLayout>
  );
};

export default HomePage;
