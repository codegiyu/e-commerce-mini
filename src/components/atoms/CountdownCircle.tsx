export interface CountDownCircleProps {
  value: number;
  label: string;
}

export const CountDownCircle = ({value, label}: CountDownCircleProps) => {
  return (
    <div 
      className="bg-white w-[60px] h-[60px] rounded-full flex flex-col  items-center \
      justify-center text-black relative "
    >
      <div className="flex flex-col items-center">
        <p className="font-bold text-xs">{value}</p>
        <span className=" capitalize text-xs">{label}</span>
      </div>
    </div>
  );
};
