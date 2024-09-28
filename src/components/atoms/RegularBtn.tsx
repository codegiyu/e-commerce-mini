import React from "react";
import { Button } from "../ui/button";

interface RegularBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fullWidth?: boolean;
}

export const RegularBtn = ({text, fullWidth = false, ...props}: RegularBtnProps) => {
  return (
    <Button 
      variant="default" 
      className={`py-4 px-12 ${fullWidth ? 'w-full' : 'w-fit'} rounded font-poppins text-base font-medium`}
      {...props}>
      {text}
    </Button>
  );
};