import Featured from "@/components/featured/featured";
import { MainLayout } from "@/layout/MainLayout";
import { Services } from "@/sections/Services";

const HomePage = () => {
  return (
    <MainLayout>
      <Featured />
      <Services/>
    </MainLayout>
  );
};

export default HomePage;
