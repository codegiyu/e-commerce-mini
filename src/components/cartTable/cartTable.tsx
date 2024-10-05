
import { Link } from "react-router-dom"
import { DataTable } from "./data-table";
import { CartItem, cartColumns } from "./column";
import perf from '@/assets/images/perfume.png';

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
        <div className="mx-auto md:w-[90%] max-w-[1170px] mt-5">
            <div className="flex items-center gap-2 md:w-[104px] p-1 ">
                <Link to="/"><span className="text-[14px] cursor-pointer">Home</span></Link>
                <span>/</span>
                <span className="text-[14px]">Cart</span>
            </div>
            <div className=" md:mt-14">
                <h2>Table Section</h2>
                <DataTable columns={cartColumns} data={cart} />
            </div>

        </div>
    )
}
export default CartTable;