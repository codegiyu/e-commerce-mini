import { productCard } from "@/constants/data";
import { Button } from "./ui/button";
import SingleCard from "./SingleCard";
import CountDown from "./CountDown";


const ProductCard = () => {

  
  return (
    <div className="grid items-center container-main mb-5 ">
      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16 my-10">
        {productCard.map((item, idx) => (
          <SingleCard key={idx} img={item.image} name={item.name}  star={item.rating } isLiked={true} price={item?.price as number} color={item.color} isNew={item.isNew} isDiscount={item.isDiscount  } />
        ))}
      </div>
      <div className="flex mx-auto my-10">
        <Button className="capitalize bg-red-500  py-5 sm-md w-[250px] ">view all products</Button>
      </div>

<CountDown/>

    </div>
  );
};

export default ProductCard;
