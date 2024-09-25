import { MainLayout } from "@/layout/MainLayout"
import { Services } from "@/sections/services"
import Featured from "@/components/featured/featured";

const HomePage = () => {
  return (
    <MainLayout>
      <Featured />
      <Services />
    </MainLayout>
  );
};

export default HomePage;
