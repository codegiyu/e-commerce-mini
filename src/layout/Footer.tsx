import sendemail from "../assets/sendemail.svg"
import copyright from "../assets/copyright.svg"
import scan from "../assets/scan.svg"
import google from "../assets/google.svg"
import x from "../assets/x.svg"
import lind from "../assets/lind.svg"
import insta from "../assets/insta.svg"
import facebook from "../assets/facebook.svg"
import { footerLinkItem } from "@/constants/data"




export const Footer = () => {
  return (
    <footer className="bg-[#000000] text-[#FAFAFA]  flex flex-col items-center justify-center container-main pt-14 md:pt-20 pb-10">
      <div className="w-full md:pl-0 pb-10 gap-6 gap-y-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
        <div className="flex flex-col gap-4 ">
          <h1 className="font-bold capitalize text-2xl mb-4">exclusive</h1>
          <h2 className="font-medium capitalize text-lg">subscribe</h2>
          <p className="text-[14px] ">Get 10% off your first order</p>
          <div className="flex items-center border border-[#FAFAFA] rounded-sm cursor-pointer">
          <input type="text" placeholder="Enter your email" className=" w-[90%] active:border-0 focus:border-0 outline-none  bg-transparent border-none rounded-sm text-white p-2 placeholder:text-white "/>
          <img src={sendemail} className="w-5 h-5  " />
          </div>
        </div>

        {
          footerLinkItem.map(item=>(
            <div key={item.id} className="flex flex-col gap-2">
                <h1 className="text-xl mb-4 font-semibold capitalize">{item.name} </h1>
                <p className="">{item.links.hd1} </p>
                <p className="">{item?.links?.hd2} </p>
                <p className="">{item?.links?.hd3} </p>
                <p className="">{item?.links?.hd4} </p>
                <p className="">{item?.links?.hd5} </p>
            </div>
          ))
        }
       
        <div className="flex flex-col gap-4">
        <h1 className="font-medium capitalize text-xl mb-2">downlaod app</h1>
        <p className="text-[13px] capitalize">save $3 with app new user only</p>
          <div className="flex flex-col gap-2 ">
            <div className="flex">
              <img src={scan} className="" />
              <img src={google} className="" />
            </div>

            <div className="flex gap-4">
              <img src={facebook} className="w-4 h-4" />
              <img src={x} className="w-4 h-4" />
              <img src={insta} className="w-4 h-4" />
              <img src={lind} className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FFFFFF]/70 w-full  flex items-center justify-center p-8 gap-2">
        <img src={copyright} className="w-5 h-5 " />
        <p className="text-[16px] text-[#FFFFFF]/70 ">Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};
