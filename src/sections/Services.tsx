import { ServiceList } from "@/constants/dServiceList"

export const Services = () => {
    return(
        <div className=" w-full h-fit grid  place-items-center">
            <div className="w-[70%]  grid grid-cols-3 place-items-center">
               {
                    ServiceList.map(item=>(
                        <div key={item.id} className=" font-poppins flex flex-col items-center gap-[.3rem]">
                            <div className='w-[20%] pb-[.5rem]'>
                                <img className='w-full' src={item.img} alt="" />
                            </div>
                            <h2 className='font-[poppins] font-[700] text-[1.3rem]'>{item.title}</h2>
                            <p className=' text-[.9rem] font-[400]'>{item.description}</p>
                        </div>
                    ))
               }
            </div>
        </div>
    )
}