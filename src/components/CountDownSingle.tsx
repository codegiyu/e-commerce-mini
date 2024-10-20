import React from 'react'

const CountDownSingle = ({time,times}:{time:number,times:string}) => {
  return (
    <div className="bg-white w-[80px] h-[80px] rounded-full flex flex-col  items-center justify-center text-black relative ">
    <div className="flex flex-col items-center">
    <p className="font-extrabold text-lg">{time}</p> <span className=" capitalize font-medium text-base">{times}</span>
    </div>
      </div>
  )
}

export default CountDownSingle