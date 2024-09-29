"use client"

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CartItem = {
  id: string;
  name:string;
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
      <div>
        <h2>Product</h2>
      </div>
    ),
    cell: ({row}) => {
      const { name, image } = row.getValue('product') as ProductColumn;

      return (
        <div className="flex items-center gap-6">
          <div className="relative">
            <img src={image} alt={name} className="w-[3.25rem] h-[3.25rem] object-cover" />
            <button className="absolute inset-0 text-red-800">X</button>
          </div>
          <span>{name}</span>
        </div>
      );
    }, 
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "quantity",
    header: "Quantity",
  },
  {
    accessorKey: "subtotal",
    header: "Subtotal",
  },
]
