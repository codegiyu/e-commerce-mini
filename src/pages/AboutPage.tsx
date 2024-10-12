import Slider from "@/components/aboutSlider/Slider";
import { TeamLayout } from "@/layout/TeamLayout";
import { Metrics } from "@/sections/about/aboutMetrics";
import { Ourstory } from "@/sections/about/Ourstory";
import { Services } from "@/sections/Services";

const AboutPage = () => {
    return (
      <TeamLayout>
          <section className="container-main">
            <Ourstory />
            <Metrics />
            <Slider />
            {/* <Services />        */}
          </section>
      </TeamLayout>
    )
}
export default AboutPage
