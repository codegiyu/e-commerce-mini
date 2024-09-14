import { ChildrenOnly } from "@/lib/types/general";
import { MainLayout } from "./MainLayout";
import Image from "../../src/assets/logSignImage.jpg"

export const AuthLayout = ({ children }: ChildrenOnly) => {
  return (
    <MainLayout>
      <section className="min-h-[75vh] grid lg:grid-cols-2 mt-[3.75rem] mb-36">
        <section className="image-section bg-blue-gray w-full h-full">
          <img src={Image} alt="image-icom" className="w-full h-full" />
        </section>
        <section className="form-section flex items-center lg:justify-end justify-center p-6">
          {children}
        </section>
      </section>
    </MainLayout>
  );
};
