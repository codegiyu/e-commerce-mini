import { DataTable } from "./data-table";

import { cartColumns } from "./column";
// import perf from '@/assets/images/perfume.png';
import { OutlineBtn } from "../atoms/OutlineBtn";
import { RegularBtn } from "../atoms/RegularBtn";
import { useCartStore } from "@/lib/store/useCartStore";
import { Link } from "react-router-dom";

const CartTable = () => {
  const cart = useCartStore((state) => state.cart);

  // const cart: CartItem[] = [
  //   {
  //     id: '63927cuh79bc28',
  //     name: 'LG TV',
  //     image: perf,
  //     price: 600,
  //     quantity: 1,
  //   },
  //   {
  //     id: '63927cuh79bc28',
  //     name: 'LG TV',
  //     image: perf,
  //     price: 600,
  //     quantity: 1,
  //   },
  //   {
  //     id: '63927cuh79bc28',
  //     name: 'LG TV',
  //     image: perf,
  //     price: 600,
  //     quantity: 1,
  //   },
  //   {
  //     id: '63927cuh79bc28',
  //     name: 'LG TV',
  //     image: perf,
  //     price: 600,
  //     quantity: 1,
  //   },
  //   {
  //     id: '63927cuh79bc28',
  //     name: 'LG TV',
  //     image: perf,
  //     price: 600,
  //     quantity: 1,
  //   },
  // ];
  return (
    <section className="container-main mb-20 mt-5 flex flex-col gap-10 md:gap-20">
      {/* <div className="flex items-center gap-2 md:w-[104px] p-1 ">
        <Link to="/"><span className="text-[14px] cursor-pointer">Home</span></Link>
        <span>/</span>
        <span className="text-[14px]">Cart</span>
      </div> */}
      <div className="">
        <DataTable columns={cartColumns} data={Object.values(cart)} />
      </div>
      <div className="flex flex-col gap-4 md:flex md:flex-row md:items-center md:justify-between md:gap-0">
        <Link to="/">
          <OutlineBtn text="Return To shop" />
        </Link>

        <OutlineBtn text="Clear Cart" />
      </div>
      <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:gap-4">
        <form className="mb-6 flex w-full flex-col gap-4 p-2 md:w-[527px] md:flex-row md:items-center md:justify-center md:p-0">
          <input
            className="rounded-md border p-[16px] font-poppins text-sm font-normal outline-none md:w-[300px]"
            placeholder="Coupon Code"
          ></input>
          <RegularBtn text="Apply Coupon" />
        </form>
        <form className="w-full rounded-sm border border-black p-4 md:w-[470px]">
          <h2 className="font-poppins text-[20px] font-medium">Cart Total</h2>
          <div className="mb-3 mt-3 flex items-center justify-between">
            <span className="font-poppins text-base font-normal">
              SubTotal:
            </span>
            <span className="font-poppins text-base font-normal">$1750</span>
          </div>
          <hr className="h-0.5 w-full bg-black" />
          <div className="mb-3 mt-4 flex items-center justify-between">
            <span className="font-poppins text-base font-normal">
              Shipping:
            </span>
            <span className="font-poppins text-base font-normal">Free</span>
          </div>
          <hr className="h-0.5 w-full bg-black" />
          <div className="mb-2 mt-4 flex items-center justify-between">
            <span className="font-poppins text-base font-normal">Total:</span>
            <span className="font-poppins text-base font-normal">$1750</span>
          </div>
          <div className="mx-auto flex items-center justify-center">
            <RegularBtn text="Process to Checkout" />
          </div>
        </form>
      </div>
    </section>
  );
};
export default CartTable;
