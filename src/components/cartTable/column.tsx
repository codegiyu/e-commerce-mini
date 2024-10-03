"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CartTable = {
  id: string
  product:string
  price: string
  quantity: number
  subtotal: number
}

export const columns: ColumnDef<CartTable>[] = [
  {
    accessorKey: "product",
    header: "Product",
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
