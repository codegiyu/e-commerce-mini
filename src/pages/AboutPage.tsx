import { MainLayout } from "@/layout/MainLayout";
import { Metrics } from "@/sections/about/aboutMetrics";
import { Ourstory } from "@/sections/about/Ourstory";
import { Services } from "@/sections/Services";

const AboutPage = () => {
    return (
      <MainLayout>
          <section className="space-y-16">
            <Ourstory />
            <Metrics />
            {/* <Services />        */}
          </section>
      </MainLayout>
    )
}
export default AboutPage
