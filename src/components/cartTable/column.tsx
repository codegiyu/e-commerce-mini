"use client"

import { ColumnDef } from "@tanstack/react-table";
import downArrow from "../../assets/downArrow.png"
import upArrow from "../../assets/upArrow.png"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

type ProductColumn = Pick<CartItem, "id" | "image" | "name">;
// type ProductColumn = Omit<CartItem, "id" | "image" | "name">;

export const cartColumns: ColumnDef<CartItem>[] = [
  {
    id: "product",
    accessorFn: row => ({ id: row.id, name: row.name, image: row.image }) satisfies ProductColumn,
    header: () => (
      <div className="">
        <h2 className="text-sm md:text-[16px]  font-poppins font-normal text-black ">Product</h2>
      </div>
    ),
    cell: ({ row }) => {
      const { name, image } = row.getValue('product') as ProductColumn;

      return (
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="relative group">
            <img src={image} alt={name} className="w-10 h-10 md:w-[3.25rem] md:h-[3.25rem] object-cover cursor-pointer" />
            <button className="absolute  text-white
              text-bold -inset-3 right-0 -left-2 rounded-[100%] w-6 h-6 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">X</button>
          </div>
          <span>{name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "price",
    header: () => (
      <div>
        <h2 className="text-sm md:text-[16px] font-poppins font-normal text-black">Price</h2>
      </div>
    ),
    cell: ({ row }) => {
      const price = row.original.price
      return (
        <span>${price}</span>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: () => (
      <div>
        <h2 className="text-sm md:text-[16px] font-poppins font-normal text-black">Quantity</h2>
      </div>
    ),
    cell: ({ row }) => {
      const quantity = row.original.quantity
      return (
        <div className="w-[72px] p-2 rounded border-[1.5px]">
          <div className="w-[48px] flex items-center justify-between">
            <span className ="text-sm font-poppins font-normal">{quantity}</span>
            <button className="flex flex-col gap-2 p-1">
              <span><img src={upArrow} alt="uparrow-icon" className=""/></span>
              <span><img src={downArrow} alt="downarrow-icon" className=""/></span>
            </button>
          </div>

        </div>
      );
    },
  },
  {
    accessorKey: "subtotal",
    header: () => (
      <div>
        <h2 className="text-sm md:text-[16px]  font-poppins font-normal text-black">Subtotal</h2>
      </div>
    ),
  },
]
