import { aboutData } from "@/constants/aboutData";

export const Metrics = () => {
  return (
    <div className="h-fit w-full">
      <div className="mx-auto w-[85%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {aboutData.map((item) => (
          <div
            key={item.id}
            className="group h-auto w-full rounded-sm border border-blue-gray bg-white p-4 transition-colors duration-300 hover:bg-primary hover:text-white cursor-pointer"
          >
            <div className="flex flex-col items-center gap-6">
              <div className="p-2 transition-all duration-300 ">
                <img
                  src={item.img}
                  className="transition-all duration-300 group-hover:filter group-hover:invert"
                  alt={item.title}
                />
              </div>
              <div className="flex flex-col items-center gap-3">
                <p className="font-inter text-base font-bold">{item.title}</p>
                <p className="font-poppins text-sm font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
