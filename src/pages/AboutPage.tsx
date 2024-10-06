import { MainLayout } from "@/layout/MainLayout";
import { Metrics } from "@/sections/aboutMetrics";
import { Ourstory } from "@/sections/Ourstory";
import { Services } from "@/sections/Services";

const AboutPage = () => {
    return (
      <MainLayout>
          <section className="space-y-16">
            <Ourstory />
            <Metrics />
            <Services />       
          </section>
      </MainLayout>
    )
}
export default AboutPage
