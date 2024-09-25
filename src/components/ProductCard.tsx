import { productCard } from "@/constants/data";
import heart from "../assets/heart.png";
import eye from "../assets/eye.png";
import { Button } from "./ui/button";
import StarRating from "./StarRating";

const ProductCard = () => {
  return (
    <div className="grid items-center container-main ">
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 my-10">
        {productCard.map((item, idx) => (
          <div
            key={idx}
            className="w-[270px] bg-[#F5F5F5] grid items-center mx-auto relative group"
          >
            <img
              src={item.image}
              alt="Description"
              className="object-contain w-[118px] grid mx-auto h-[180px] "
            />
            <div className="absolute top-3 right-4 flex flex-col gap-3">
              <div className="w-[32px] h-[32px] bg-white rounded-full grid items-center justify-center">
                <img
                  src={heart}
                  alt=""
                  className="w-[20px] h-[20px]   object-contain cursor-pointer    "
                />
              </div>
              <div className="w-[32px] h-[32px] bg-white rounded-full grid items-center justify-center">
                <img
                  src={eye}
                  alt=""
                  className="w-[20px] h-[20px]   object-contain cursor-pointer    "
                />
              </div>
            </div>
            <Button
              variant={"default"}
              type="submit"
              className="bg-black rounded-none absolute w-full bottom-0 group-hover:bottom-[70px] capitalize  opacity-0 font-semibold   group-hover:opacity-100 group-hover:flex transition-all duration-500"
            >
              Add to cart
            </Button>
            <div className="bg-white py-2 ">
              <p className="font-semibold capitalize text-base">{item.name} </p>
              <div className="flex items-center gap-2 my-2">
                <p className="text-red-500 text-sm font-semibold">
                  ${item.price}{" "}
                </p>
             

                <StarRating rating={item.rating as number} />
              
              </div>
            </div>
            {item?.new && (
              <p className="absolute capitalize top-2 left-3 bg-green-500 pb-2 text-white p-1 rounded-sm min-w-[50px] flex justify-center text-center  ">
                {item.new}{" "}
              </p>
            )}
            <div className="flex gap-1 bg-white">
              {item.color.map((item) => (
                <div className="flex gap-1 ">
                  <div
                    style={{ backgroundColor: item }}
                    className="w-4 h-4 rounded-full border-2 border-black p-1"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mx-auto my-10">
        <Button className="capitalize bg-red-500  py-5 sm-md w-[250px] ">view all products</Button>
      </div>
    </div>
  );
};

export default ProductCard;
