import { aboutData } from "@/constants/aboutData";

export const Metrics = () => {
  return (
    <div className="h-fit w-full">
      <div className="mx-auto grid w-[85%] grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 sm-md:grid-cols-2">
        {aboutData.map((item) => (
          <div
            key={item.id}
            className="group aspect-[1174/1000] w-full cursor-pointer rounded-sm border border-blue-gray bg-white p-4 transition-colors duration-300 hover:bg-primary hover:text-white sm-md:max-w-[270px]"
          >
            <div className="flex h-auto flex-col items-center gap-4">
              <div className="inline-block transition-all duration-300">
                <img
                  src={item.img}
                  className="mx-auto w-full transition-all duration-300 group-hover:invert group-hover:filter sm:w-3/4 md:w-1/2 lg:w-auto"
                  alt={item.title}
                />
              </div>

              <div className="flex flex-col items-center gap-3">
                <p className="font-inter text-base font-bold">{item.title}</p>
                <p className="font-poppins text-sm font-normal md:text-[10px] lg:text-xs sm-md:text-xs text-center">
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
