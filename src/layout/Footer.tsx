import sendemail from "../assets/sendemail.svg";
import copyright from "../assets/copyright.svg";
import scan from "../assets/scan.svg";
import google from "../assets/google.svg";
import x from "../assets/x.svg";
import lind from "../assets/lind.svg";
import insta from "../assets/insta.svg";
import facebook from "../assets/facebook.svg";
import { footerLinkItem } from "@/constants/data";

export const Footer = () => {
  return (
    <footer className="container-main flex flex-col items-center justify-center bg-[#000000] pt-14 text-[#FAFAFA] md:pt-20">
      <div className="grid w-full grid-cols-2 gap-6 gap-y-14 pb-10 md:grid-cols-3 md:pl-0 lg:grid-cols-4 xl:grid-cols-5">
        <div className="flex flex-col gap-4">
          <h1 className="mb-4 text-2xl font-bold capitalize">exclusive</h1>
          <h2 className="text-lg font-medium capitalize">subscribe</h2>
          <p className="text-[14px]">Get 10% off your first order</p>
          <div className="flex cursor-pointer items-center rounded-sm border border-[#FAFAFA]">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-[90%] rounded-sm border-none bg-transparent p-2 text-white outline-none placeholder:text-white focus:border-0 active:border-0"
            />
            <img src={sendemail} className="h-5 w-5" />
          </div>
        </div>

        {footerLinkItem.map((item) => (
          <div key={item.name} className="flex flex-col gap-2">
            <h1 className="mb-4 text-xl font-semibold capitalize">
              {item.name}{" "}
            </h1>
            <div className="flex flex-col gap-2">
              {item.links.map((item) => (
                <div className="">
                  <a href={item?.path}>{item.title} </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col gap-4">
          <h1 className="mb-2 text-xl font-medium capitalize">downlaod app</h1>
          <p className="text-[13px] capitalize">
            save $3 with app new user only
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex">
              <img src={scan} className="" />
              <img src={google} className="" />
            </div>

            <div className="flex gap-4">
              <img src={facebook} className="h-4 w-4" />
              <img src={x} className="h-4 w-4" />
              <img src={insta} className="h-4 w-4" />
              <img src={lind} className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-2 border-t border-[#FFFFFF]/10 p-8">
        <img
          src={copyright}
          className="h-5 w-5 stroke-red-600 text-[#FFFFFF]/20"
        />
        <p className="text-[16px] text-[#FFFFFF]/20">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};
