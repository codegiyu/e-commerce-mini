import { AuthLayout } from "@/layout/AuthLayout";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayout>

      <form action="" className=" flex flex-col gap-4 w-full max-w-[371px]">
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h1 className="text-[25px] md:text-[30px] lg:text-[36px] font-medium">Log in to Exclusive</h1>
          <p className="text-[16px] font-normal">Enter your details below</p>
        </div>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Email"
            id="email"
            className="border-b border-gray-400 text-lg px-4 py-4 outline-none "
          />
          <input
            type="text"
            placeholder="password"
            id="password"
            className="border-b border-gray-400 text-lg px-4 py-4 outline-none"
          />
        </div>


        <div className="flex items-center justify-between  gap-[10px]">
          <button
            type="submit"
            className="bg-[#DB4444] py-4 
            lg:px-3 rounded-sm
             text-white text-[16px] font-medium  w-[143px]"
          >
            LogIn
          </button>
          <h2 className="font-normal text-[16px] text-[#DB4444]">forgot password ?</h2>
        </div>
        <div className="flex items-center  w-[248px] mx-auto gap-2">
          <h2 className="font-normal text-[16px]">Don't have an account?</h2>
          <Link to="/signup"><p className="font-normal text-[16px] cursor-pointer">sign-up</p></Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;
