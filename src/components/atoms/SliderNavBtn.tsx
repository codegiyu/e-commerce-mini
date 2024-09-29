import React from "react";
import { Button } from "../ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

interface SliderNavBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
}

export const SliderNavBtn = ({direction, ...props}: SliderNavBtnProps) => {
  return (
    <Button variant="secondary" className="group p-[0.6875rem] w-fit rounded-full font-poppins text-base font-medium" {...props}>
      {direction === 'left' ? (
        <FaArrowLeft className="group-hover:scale-[110%] text-xl"  />
      ) : (
        <FaArrowRight className="group-hover:scale-[110%] text-xl" />
      )}
    </Button>
  );
};