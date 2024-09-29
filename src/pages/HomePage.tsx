import { MainLayout } from "@/layout/MainLayout"
import { Services } from "@/sections/Services"
import Featured from "@/components/featured/featured";
import CountDown from "@/components/CountDown";

const HomePage = () => {
  return (
    <MainLayout>
      <section className="container-main">
        <CountDown />
      </section>
      <Featured />
      <Services />
    </MainLayout>
  );
};

export default HomePage;
