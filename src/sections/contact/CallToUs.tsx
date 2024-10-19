import { ReactNode } from "react";

interface CallToUsProps {
  children: ReactNode; 
}

function CallToUs({ children }: CallToUsProps) {
  return (
    <div className="bg-[#DB4444] w-10 h-10 rounded-[31px] flex items-center justify-center">
      {children} 
    </div>
  );
}

export default CallToUs;
