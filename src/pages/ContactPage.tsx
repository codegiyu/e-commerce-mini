import { MainLayout } from "@/layout/MainLayout";
import ContactUsCard from "@/sections/contact/ContactUsCard";

const ContactPage = () => {
  return (
    <MainLayout>
      <section className="container-main">
        <ContactUsCard />
      </section>
    </MainLayout>
  );
};

export default ContactPage
