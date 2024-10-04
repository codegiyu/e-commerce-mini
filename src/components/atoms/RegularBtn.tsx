import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface RegularBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  fullWidth?: boolean;
}

export const RegularBtn = ({text, fullWidth = false, className, ...props}: RegularBtnProps) => {
  return (
    <Button 
      variant="default" 
      className={cn(`py-4 px-12 ${fullWidth ? 'w-full' : 'w-fit'} rounded font-poppins text-base font-medium`, className)}
      {...props}>
      {text}
    </Button>
  );
};