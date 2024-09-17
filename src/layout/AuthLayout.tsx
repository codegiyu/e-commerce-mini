import { ChildrenOnly } from "@/lib/types/general";
import { MainLayout } from "./MainLayout";
import Image from "../../src/assets/logSignImage.jpg";

export const AuthLayout = ({ children }: ChildrenOnly) => {
  return (
    <MainLayout>
      <section className="container-main lg:container-auth h-auto lg:min-h-[75vh] grid lg:grid-cols-2 mt-[3.75rem] mb-36">
        <section className="image-section bg-blue-gray w-full h-full hidden lg:block">
          <img src={Image} alt="image-icom" className="w-full h-full" />
        </section>
        <section className="form-section flex items-center lg:justify-end justify-center">
          {children}
        </section>
      </section>
    </MainLayout>
  );
};
