
import { MainLayout } from "@/layout/MainLayout"
import { Services } from "@/sections/Services"
import Featured from "@/components/featured/featured";
import CountDown from "@/components/CountDown";
import { ThisMonth } from "@/sections/home/ThisMonth";


const HomePage = () => {
  return (
    <MainLayout>
      <ThisMonth />
      <section className="container-main">
        <CountDown />
      </section>
      <Featured />
      <Services />
    </MainLayout>
  );
};

export default HomePage;
