import React, { useState } from "react";
import heart from "../assets/heart.png";
import StarRating from "./StarRating";
import { Button } from "./ui/button";
import { useCartStore } from "@/lib/store/useCartStore";

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
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  img,
  name,
  star,
  isLiked = true,
  price,
  color = [],
  isNew = false,
  discountPrice = 0,
}) => {
  const { addToCart, removeFromCart } = useCartStore((state) => state.actions);
  const cart = useCartStore((state) => state.cart);

  const [select, setSelected] = useState("");

  const isItemInCart = Boolean(cart[id]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSelect = (item: string, _idx: number) => {
    setSelected(item);
  };

  const handleCartBtnClick = () => {
    const priceInUse = discountPrice || price;

    return isItemInCart
      ? removeFromCart(id)
      : addToCart({
          id,
          name,
          image: img,
          price: priceInUse,
          quantity: 1,
          subtotal: priceInUse,
        });
  };
  return (
    <div className="group relative mx-auto grid h-[322px] w-[270px] items-center bg-[#F5F5F5]">
      <img
        src={img}
        alt="Description"
        style={{ height: "150px" }}
        className="mx-auto my-auto grid w-[118px] object-contain"
      />

      <div className="absolute right-4 top-3 flex gap-3">
        <div className="grid h-[32px] w-[32px] items-center justify-center rounded-full bg-white">
          {isLiked && (
            <img
              src={heart}
              alt=""
              className="h-[20px] w-[20px] cursor-pointer object-contain"
            />
          )}
        </div>
      </div>
      <Button
        variant={"default"}
        type="button"
        onClick={handleCartBtnClick}
        className="absolute bottom-[110px] w-full rounded-none bg-black font-semibold capitalize opacity-0 transition-all duration-500 group-hover:bottom-[130px] group-hover:flex group-hover:opacity-100"
      >
        {isItemInCart ? "Remove from" : "Add to"} cart
      </Button>
      <div className="h-full w-full bg-white">
        <div className="py-2">
          <p className="text-base font-semibold capitalize">{name} </p>
          <div className="my-2 flex items-center gap-2">
            <p className="text-sm font-semibold text-red-500">${price} </p>

            <StarRating rating={star as number} />
          </div>
        </div>
        <div className="absolute left-3 top-2 flex flex-col items-center gap-1">
          {isNew && (
            <p className="flex min-w-[50px] justify-center rounded-sm bg-green-500 p-1 pb-2 text-center capitalize text-white">
              new
            </p>
          )}
          {discountPrice && (
            <p className="flex min-w-[50px] justify-center rounded-sm bg-red-500 p-1 pb-2 text-center capitalize text-white">
              {discountPrice}
            </p>
          )}
        </div>
        <div className="flex gap-1 bg-white">
          {color.map((item, idx) => (
            <div
              className="flex gap-1"
              key={idx}
              onClick={() => handleSelect(item, idx)}
            >
              <div
                style={{
                  backgroundColor: item,
                  borderColor: select === item ? "black" : "transparent",
                }}
                className={`relative h-4 w-4 rounded-full border-2`}
              >
                <div
                  className={`${item === select ? "absolute left-0 top-0 h-3 w-3 rounded-full border-2 border-white" : ""}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
