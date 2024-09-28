import React from "react";
import { Button } from "../ui/button";

interface OutlineBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fullWidth?: boolean;
}

export const OutlineBtn = ({text, fullWidth = false, ...props}: OutlineBtnProps) => {
  return (
    <Button 
      variant="outline" 
      className={`py-4 px-12 ${fullWidth ? 'w-full' : 'w-fit'} rounded font-poppins text-base font-medium`}
      {...props}>
      {text}
    </Button>
  );
};