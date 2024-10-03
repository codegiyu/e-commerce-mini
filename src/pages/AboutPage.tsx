import { MainLayout } from "@/layout/MainLayout";
import { Ourstory } from "@/sections/Ourstory";
import { Services } from "@/sections/Services";

const AboutPage = () => {
    return (
      <MainLayout>
          <section className="">
            <Ourstory />
            <Services />       
          </section>
      </MainLayout>
    )
}
export default AboutPage
{/* <RegularBtn text="View all products" />
  <RegularBtn text="This is a full width button" fullWidth />
  <SliderNavBtn direction="left" />
  <OutlineBtn text="See all" /> */}