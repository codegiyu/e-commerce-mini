import { MainLayout } from "@/layout/MainLayout";
import ContactUsCard from "@/sections/contact/ContactUsCard";
import MessageBox from "@/sections/contact/MessageBox";

export default function ContactPage() {
  return (
    <MainLayout>
      <section className="">
        <div className="mt-[181px] mb-[140px] px-[135px] flex gap-[30px]">
          <ContactUsCard />
          <MessageBox />
        </div>
      </section>
    </MainLayout>
  );
}
