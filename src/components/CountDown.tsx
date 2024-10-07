import Countdown from 'react-countdown';
import countdown from "../assets/countdown.png"
import elis from "../assets/elis.png";
import { RegularBtn } from './atoms/RegularBtn';
import { Link } from 'react-router-dom';
import { CountDownCircle } from './atoms/CountdownCircle';

const renderer = ({ days, hours, minutes, seconds, completed }:{days:any,hours:any,minutes:any,seconds:any,completed:any}) => {
  if (completed) {
   
    return  <h1 className="font-[600] text-[40px] w-full md:text-[30px]">Summer sales completed</h1>;
  } else {
    
    return (
      <div className='flex flex-col text-white pl-[40px] pr-[40px] md:pr-0 pt-[40px] gap-5 lg:gap-8  w-full'>
        <span className="text-green-600 font-medium capitalize">categories</span>
        <h1 className="font-[600] text-[40px] w-full md:text-[30px]">Enhance Your Music Experience</h1>
        <div className="flex gap-6  md:gap-10 items-center">
          <CountDownCircle value={days} label='Days' />
          <CountDownCircle value={hours} label='Hours' />
          <CountDownCircle value={minutes} label='Minutes' />
          <CountDownCircle value={seconds} label='Seconds' />
        </div>
        <Link to="#">
          <RegularBtn text='Buy Now' className="bg-bright-green hover:bg-bright-green/80" />
        </Link>
      </div>
     
    );
  }
};

const CountDown = () => {
  const targetDate = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);

  return (
    <div className="w-full bg-[#000000] h-[350px] flex">
        <div className="flex-1 w-full ">
        <Countdown date={targetDate} renderer={renderer} />
        </div>
        <div className="flex-[1] relative w-full h-full pr-[20px] hidden md:flex bg-transparent overflow-hidden">
        <img src={elis} className="absolute w-[100%] h-[100%]  top-0 left-0 translate-y-[0%]  -z-0 translate-x-[10%]  "/>

  <img src={countdown} className="w-full h-full object-contain    z-20 " alt="" />
</div>
    </div>
  )
}


export default CountDown