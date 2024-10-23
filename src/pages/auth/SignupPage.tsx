import { AuthLayout } from "@/layout/AuthLayout";
import GImage from "../../assets/Google.png"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z, ZodType } from "zod";

export type SignupFormInfo = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUP = () => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const schema: ZodType<SignupFormInfo> = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(5, "Password must have least of 5 characters").max(20, "Password cant exceed 20 characters"),
    confirmPassword: z.string().min(5, "Password must have least of 5 characters").max(20, "Password cant exceed 20 characters")
  }).refine((data) => data.password === data.confirmPassword,{
    message:"Password do not match",
    path:["confirmPassword"]
  })

  const { register, handleSubmit,
    formState: { errors }, reset
  } = useForm<SignupFormInfo>({ resolver: zodResolver(schema) })


  const submitData = (data: SignupFormInfo) => {
    console.log("submitted success", data)
    reset();
  }
  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(submitData)} className="flex flex-col gap-3 w-full max-w-[371px]">
        <div className="flex flex-col gap-2 text-center lg:text-left">
          <h1 className="text-[25px] md:text-[30px] lg:text-[36px] font-medium">Create an account</h1>
          <p className="text-[16px] font-normal">Enter your details below</p>
        </div>

        <div className="flex flex-col gap-5 w-full">
          {/* First Name Field */}
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            required
            {...register("firstName")}
            className="border-b border-gray-400 text-[16px] px-4 py-4 outline-none w-full"
          />
          {errors.firstName && <span className="text-red-500 font-bold">{errors.firstName.message}</span>}

            {/* Last Name Field */}
           <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            required
            {...register("lastName")}
            className="border-b border-gray-400 text-[16px]  px-4 py-4 outline-none w-full"
          />
          {errors.lastName && <span className="text-red-500 font-bold">{errors.lastName.message}</span>}

          {/* Email Field */}
          <input
            type="text"
            placeholder="Email"
            id="email"
            required
            {...register("email")}
            className="border-b border-gray-400 text-[16px] px-4 py-4 outline-none w-full bg-transparent"
          />
          {errors.email && <span className="text-red-500 font-bold">{errors.email.message}</span>}

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              {...register("password")}
              id="password"
              className="border-b border-gray-400 text-[16px]  px-4 py-4 outline-none w-full"
            />
            {errors.password && <span className="text-red-500 font-bold">{errors.password.message}</span>}
            <button
              className="absolute inset-y-0 right-0 px-2 py-2 text-gray-400"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>
          </div>
          
          {/* confirm Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
              {...register("confirmPassword")}
              id="password"
              className="border-b border-gray-400 text-[16px]  px-4 py-4 outline-none w-full"
            />
            {errors.confirmPassword && <span className="text-red-500 font-bold">{errors.confirmPassword.message}</span>}
            <button
              className="absolute inset-y-0 right-0 px-2 py-2 text-gray-400"
              type="button"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[16px]">
          <button
            type="submit"
            className="bg-[#DB4444] py-4 lg:px-30 rounded-sm w-full text-white text-[16px] font-medium hover:bg-[#CBE4E8] hover:text-black"
          >
            Create Account
          </button>

          <div className="w-full border border-gray-400 py-4 lg:px-[86px] rounded-sm cursor-pointer">
            <div className="flex items-center gap-3 w-[199px] mx-auto">
              <img src={GImage} width="24px" height="24px" alt="google-icon" />
              <p className="font-normal">Sign up with Google</p>
            </div>
          </div>

          <div className="flex items-center w-[248px] mx-auto gap-2">
            <h2 className="font-normal text-[16px]">Already have an account?</h2>
            <Link to="/login">
              <p className="font-normal text-[16px] cursor-pointer">Login</p>
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>

  );
};


      

export default SignUP;
