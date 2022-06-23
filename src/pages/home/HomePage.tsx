import { MainLayout } from "../../components/layouts";
import { HomeSlider } from "./components/HomeSlider";

const HomePage = () => {
  return (
    <MainLayout title="Home | Challenge" subtitle="Tu mejor amigo">
      <HomeSlider />
    </MainLayout>
  );
};

export default HomePage;
