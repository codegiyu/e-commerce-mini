import { ReactNode } from 'react';

// Define Header prop types
interface HeaderProps {
    title: string;          
    label: string;          
    timer?: ReactNode;           
    children?: ReactNode;   
}

export const Header = ({ title, label, timer, children } : HeaderProps) => {
  return (
    <section className='flex justify-between'>
        <div className='flex gap-[87px]'>
            <div className='flex flex-col gap-5'>
                <div className='text-primary flex gap-[10px] items-center'>
                    <div className='w-[20px] h-[40px] bg-primary rounded-sm'></div>
                    <p className='font-semibold text-base'>{label}</p>
                </div>
                <h3 className="text-4xl font-semibold">{title}</h3>
            </div>
            {/* Timer will appear here if passed as prop */}
            {timer && <div className="mt-auto">{timer}</div>}
        </div>
        {children}
    </section>
  );
};