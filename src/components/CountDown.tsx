
import Countdown from 'react-countdown';
import countdown from "../assets/countdown.png"
import elis from "../assets/elis.png"
import { Button } from './ui/button';
import CountDownSingle from './CountDownSingle';

const CountDown = () => {

   

    const renderer = ({ days, hours, minutes, seconds, completed }:{days:any,hours:any,minutes:any,seconds:any,completed:any}) => {
      if (completed) {
       
        return  <h1 className="font-[600] text-[40px] w-full md:text-[30px]">Summer sales completed</h1>;
      } else {
        
        return (
          <div className='flex flex-col text-white md:pl-[40px] :pr-[40px]  pt-[40px] gap-5 lg:gap-8  w-full'>
            <span className="text-[#15ad3d]  font-bold text-2xl  capitalize">categories</span>
            <h1 className="font-[600] text-[40px] w-full md:text-[30px]">Enhance Your Music Experience</h1>
            <div className="flex gap-6  md:gap-10 items-center">
             <CountDownSingle time={days} times='days'/>
             <CountDownSingle time={hours} times='hours'/>
            <CountDownSingle time={minutes} times='minutes'/>
             <CountDownSingle time={seconds} times='seconds'/>
            </div>
            <Button className='  lg:max-w-[200px] bg-[#15ad3d] hover:bg-green-700 text-xl !py-4 text-white'>Buy Now</Button>
          </div>
         
        );
      }
    };
    const targetDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
  return (
    <div className="w-full bg-[#000000] h-[450px]  flex mb-5 ">
        <div className="flex-1 w-full p-8">
        <Countdown date={targetDate} renderer={renderer} />
        </div>
        <div className="flex-[1] relative  w-full h-full pr-[20px] items-center justify-center hidden lg:flex bg-transparent overflow-hidden">
        <img src={elis} className="absolute w-[100%] h-[100%]  top-0 left-0 translate-y-[0%]  -z-0 translate-x-[10%]  "/>

  <img src={countdown} className="w-full h-full object-contain  p-8  z-20 " alt="" />
</div>
    </div>
  )
}


export default CountDown