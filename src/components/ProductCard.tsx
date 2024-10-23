import React, { useState } from 'react'
import heart from "../assets/heart.png";
import StarRating from "./StarRating";
import { Button } from './ui/button';
import { useCartStore } from '@/lib/store/useCartStore';

export type ProductCardProps = {
  id: string;
  img: string;
  name: string;
  star?: number;
  color?: string[];
  isNew?: boolean;
  discountPrice?: number;
  isLiked?: boolean;
  price: number;
}

const ProductCard:React.FC<ProductCardProps>  = ({
  id,
  img,
  name,
  star,
  isLiked = true,
  price,
  color = [],
  isNew = false,
  discountPrice = 0
}) => {
    const { addToCart, removeFromCart } = useCartStore(state => state.actions);
    const cart = useCartStore(state => state.cart);

    const[select,setSelected]=useState("");

    const isItemInCart = Boolean(cart[id]);
    

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleSelect = (item:string, _idx:number)=>{
        setSelected(item)
    }

    const handleCartBtnClick = () => {
      const priceInUse = discountPrice || price;

      return isItemInCart
        ? removeFromCart(id)
        : addToCart({ id, name, image: img, price: priceInUse, quantity: 1, subtotal: priceInUse });
    };
  return (
    <div
            className="h-[322px] grid bg-[#F5F5F5]  items-center mx-auto relative group w-[270px]  "
          >
            

           <img
              src={img}
              alt="Description"
              style={{ height: '150px' }} 
              className="object-contain w-[118px] grid mx-auto my-auto"
            />
           
        
            <div className="absolute top-3 right-4 flex  gap-3">
              <div className="w-[32px] h-[32px] bg-white rounded-full grid items-center justify-center">
               {
                isLiked &&  <img
                src={heart}
                alt=""
                className="w-[20px] h-[20px]   object-contain cursor-pointer"
              />
               }
              </div>
             
            </div>
            <Button
              variant={"default"}
              type="button"
              onClick={handleCartBtnClick}
              className="bg-black rounded-none absolute w-full bottom-[110px] group-hover:bottom-[130px] capitalize  opacity-0 font-semibold   group-hover:opacity-100 group-hover:flex transition-all duration-500"
            >
              {isItemInCart ? 'Remove from' : 'Add to'} cart
            </Button>
            <div className="bg-white w-full h-full">
            <div className=" py-2 ">
              <p className="font-semibold capitalize text-base">{name} </p>
              <div className="flex items-center gap-2 my-2">
                <p className="text-red-500 text-sm font-semibold">
                  ${price}{" "}
                </p>
             

                <StarRating rating={star as number} />
              
              </div>
            </div>
            <div className="absolute  top-2 left-3 flex flex-col items-center gap-1">
            {isNew && (
              <p className=" capitalize  bg-green-500 pb-2 text-white p-1 rounded-sm min-w-[50px] flex justify-center text-center  ">
              new
              </p>
            )}
            {discountPrice && (
              <p className=" capitalize  bg-red-500 pb-2 text-white p-1 rounded-sm min-w-[50px] flex justify-center text-center  ">
              {discountPrice}
              </p>
            )}
            </div>
            <div className="flex gap-1 bg-white">
              {color.map((item,idx) => (
                
                <div className="flex gap-1 " key={idx} onClick={()=>handleSelect(item,idx)}>

                  <div style={{ backgroundColor: item,borderColor:select===item   ?"black":"transparent",  }}
                    className={` w-4 h-4 rounded-full border-2  relative`} >
           <div className={`${item===select  ?"absolute left-0 top-0 border-2 rounded-full border-white w-3 h-3":""}`}></div>
                    </div>
            </div>
              ))}
            </div>
            </div>
          </div>
  )
}
  
export default ProductCard