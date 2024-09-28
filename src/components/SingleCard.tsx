import React, { useState } from 'react'
import heart from "../assets/heart.png";
import StarRating from "./StarRating";
import { Button } from './ui/button';

type CardType={
    img:string,
    name:string,
    star?:number,
    color:string[],
    isNew?:boolean,
    isDiscount?:string
    isLiked?:boolean
    key:number
    price:number
}
const SingleCard:React.FC<CardType>  = ({img,name, key,star,isLiked,price,color,isNew,isDiscount}) => {
    const[select,setSelected]=useState("")
    

    const handleSelect = (item:string,idx:number)=>{
       
        setSelected(item)
       
    }
  return (
    <div
            key={key}
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
                className="w-[20px] h-[20px]   object-contain cursor-pointer    "
              />
               }
              </div>
             
            </div>
            <Button
              variant={"default"}
              type="submit"
              className="bg-black rounded-none absolute w-full bottom-[110px] group-hover:bottom-[130px] capitalize  opacity-0 font-semibold   group-hover:opacity-100 group-hover:flex transition-all duration-500"
            >
              Add to cart
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
            {isDiscount && (
              <p className=" capitalize  bg-red-500 pb-2 text-white p-1 rounded-sm min-w-[50px] flex justify-center text-center  ">
              {isDiscount}
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
  
export default SingleCard