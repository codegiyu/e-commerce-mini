import { AuthLayout } from "@/layout/AuthLayout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z, ZodType } from "zod";
import { RegularBtn } from "@/components/atoms/RegularBtn";
import { debounce } from "@/lib/utils/general";

type LoginData = {
  email: string;
  password: string;
}
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const schema: ZodType<LoginData> = z.object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(5, "Password must have least of 5 characters").max(20, "Password cant exceed 20 characters")
  });
  const {
    register,
    handleSubmit,
    formState:{
      errors,
      isValid
    },
    reset
  } = useForm<LoginData>({ resolver: zodResolver(schema) })

  const submitDate = async (data: LoginData) => {
    console.log("successfully login", data);

    setLoading(true);
    await debounce(3000);
    setLoading(false);
    reset();
  }
  return (
    <AuthLayout>

      <form action="" onSubmit={handleSubmit(submitDate)} className=" flex flex-col gap-4 w-full max-w-[371px]">
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h1 className="text-[25px] md:text-[30px] lg:text-[36px] font-medium">Log in to Exclusive</h1>
          <p className="text-[16px] font-normal">Enter your details below</p>
        </div>
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Email"
            id="email"
            {...register("email")}
            className="border-b border-gray-400 text-lg px-4 py-4 outline-none "
          />
            {errors.email && <span className="text-red-500 font-bold">{errors.email.message}</span>}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              id="password"
              {...register("password")}
              className="border-b border-gray-400 text-lg px-4 py-4 outline-none w-full"
            />
             {errors.password && <span className="text-red-500 font-bold">{errors.password.message}</span>}
            <button type="button" className="absolute inset-y-0 right-0 px-2 py-2 text-gray-400"
              onClick={togglePasswordVisibility}>
              {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>

          </div>

        </div>


        <div className="flex items-center justify-between  gap-[10px]">
          {/* <button
            type="submit"
            className="bg-[#DB4444] py-4 
            lg:px-3 rounded-sm
             text-white text-[16px] font-medium  w-[143px]"
          >
            LogIn
          </button> */}
          <RegularBtn 
            type="submit" 
            text={loading ? 'Logging in...' : 'Login'}
            disabled={!isValid || loading}
          />
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
