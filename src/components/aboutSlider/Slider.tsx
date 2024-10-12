// import React from "react";
import { memberCard } from "@/constants/data";
import TeamMemberSlider from "@/components/aboutSlider/TeamMemberSlider";

const Slider = () => {
  return (
    <div className="">
      <TeamMemberSlider memberCard={memberCard} />
    </div>
  );
};

export default Slider;
