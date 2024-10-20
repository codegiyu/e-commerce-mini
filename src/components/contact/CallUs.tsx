import { ReactNode } from "react";
import CallToUs from "./CallToUs";
interface CallUsProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}
export default function CallUs({ title, icon, children }: CallUsProps) {
  return (
    <section>
      <div className="flex  items-center  gap-2">
        <CallToUs>
          <div>{icon}</div>
        </CallToUs>
        <h1 className="font-medium text-[1rem] leading-6 text-[#000000]">
          {title}
        </h1>
      </div>
      {children}
      
    </section>
  );
}
