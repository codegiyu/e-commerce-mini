import { OutlineBtn } from "@/components/atoms/OutlineBtn"
import { RegularBtn } from "@/components/atoms/RegularBtn"
import { SliderNavBtn } from "@/components/atoms/SliderNavBtn"
import { MainLayout } from "@/layout/MainLayout"

const AboutPage = () => {
    return (
      <MainLayout>
          <section className="container-main grid gap-6">
            <RegularBtn text="View all products" />
            <RegularBtn text="This is a full width button" fullWidth />
            <SliderNavBtn direction="left" />
            <OutlineBtn text="See all" />
          </section>
      </MainLayout>
    )
}
export default AboutPage