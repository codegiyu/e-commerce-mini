import { ChildrenOnly } from "@/lib/types/general";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const TeamLayout = ({ children }: ChildrenOnly) => {
  return (
    <div className="">
      <Header />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};
