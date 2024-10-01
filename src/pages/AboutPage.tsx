import Slider from "@/components/aboutSlider/Slider";
import { OutlineBtn } from "@/components/atoms/OutlineBtn";
import { RegularBtn } from "@/components/atoms/RegularBtn";
import { SliderNavBtn } from "@/components/atoms/SliderNavBtn";
import { MainLayout } from "@/layout/MainLayout";
import { TeamLayout } from "@/layout/TeamLayout";

const AboutPage = () => {
  return (
    <TeamLayout>
      <section className="container-main">
        <div>About Page</div>
        <RegularBtn text="View all products" />
        <RegularBtn text="This is a full width button" fullWidth />
        <Slider />
        <SliderNavBtn direction="left" />
        <OutlineBtn text="See all" />
      </section>
    </TeamLayout>
  );
};
export default AboutPage;
