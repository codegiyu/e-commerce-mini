
import { Link } from "react-router-dom"
import { DataTable } from "./data-table";
import { CartItem, cartColumns } from "./column";
import perf from '@/assets/images/perfume.png';
import { OutlineBtn } from "../atoms/OutlineBtn";
import { RegularBtn } from "../atoms/RegularBtn";

const CartTable = () => {

  const cart: CartItem[] = [
    {
      id: '63927cuh79bc28',
      name: 'LG TV',
      image: perf,
      price: 600,
      quantity: 1,
    },
    {
      id: '63927cuh79bc28',
      name: 'LG TV',
      image: perf,
      price: 600,
      quantity: 1,
    },
    {
      id: '63927cuh79bc28',
      name: 'LG TV',
      image: perf,
      price: 600,
      quantity: 1,
    },
    {
      id: '63927cuh79bc28',
      name: 'LG TV',
      image: perf,
      price: 600,
      quantity: 1,
    },
    {
      id: '63927cuh79bc28',
      name: 'LG TV',
      image: perf,
      price: 600,
      quantity: 1,
    },
  ];
  return (
    <div className="md:mx-auto md:w-[90%] md:max-w-[1170px] mt-5 mb-20 flex flex-col gap-10 md:gap-20  p-3 md:p-0">
      <div className="flex items-center gap-2 md:w-[104px] p-1 ">
        <Link to="/"><span className="text-[14px] cursor-pointer">Home</span></Link>
        <span>/</span>
        <span className="text-[14px]">Cart</span>
      </div>
      <div className="">
        <DataTable columns={cartColumns} data={cart} />
      </div>
      <div className=" flex md:flex md:flex-row md:items-center md:justify-between  flex-col gap-4 ">
        <OutlineBtn text="Return To shop" />
        <OutlineBtn text="Update Cart" />
      </div>
      <div className="mb-12 flex flex-col md:flex-row items-start justify-between md:gap-4" >
        <form className="md:w-[527px] w-full mb-6 p-2 flex  flex-col md:flex-row md:items-center md:justify-center gap-4">
          <input className="md:w-[300px] p-[16px] rounded-md border font-poppins outline-none font-normal text-sm"
            placeholder="Coupon Code">
          </input>
          <RegularBtn text="Apply Coupon" />
        </form>
        <form className="md:w-[470px] w-full p-4 border border-black rounded-sm">
          <h2 className="text-[20px] font-poppins font-medium">Cart Total</h2>
          <div className="flex items-center justify-between mb-3 mt-3">
            <span className="text-base font-poppins font-normal">SubTotal:</span>
            <span className="text-base font-poppins font-normal">$1750</span>
          </div>
          <hr className="w-full h-0.5 bg-black" />
          <div className="flex items-center justify-between mb-3 mt-4">
            <span className="text-base font-poppins font-normal">Shipping:</span>
            <span className="text-base font-poppins font-normal">Free</span>
          </div>
          <hr className="w-full h-0.5 bg-black" />
          <div className="flex items-center justify-between mb-2 mt-4">
            <span className="text-base font-poppins font-normal">Total:</span>
            <span className="text-base font-poppins font-normal">$1750</span>
          </div>
          <div className="mx-auto flex items-center justify-center  ">
            <RegularBtn text="Process to Checkout" />
          </div>

        </form>
      </div>

    </div>
  )
}
export default CartTable;