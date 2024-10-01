// import { OutlineBtn } from "@/components/atoms/OutlineBtn";
// import { RegularBtn } from "@/components/atoms/RegularBtn";
// import { SliderNavBtn } from "@/components/atoms/SliderNavBtn";
import { MainLayout } from "@/layout/MainLayout";
import { Ourstory } from "@/sections/Ourstory";
import { Services } from "@/sections/Services";

const AboutPage = () => {
    return (
      <MainLayout>
          <section className="">
            <Ourstory />
            <Services />
            {/* <RegularBtn text="View all products" />
            <RegularBtn text="This is a full width button" fullWidth />
            <SliderNavBtn direction="left" />
            <OutlineBtn text="See all" /> */}
          </section>

          {/*  */}
      </MainLayout>
    )
}
export default AboutPage