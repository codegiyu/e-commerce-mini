import {aboutData } from "@/constants/aboutData";

export const Metrics = () => {
  return (
    <div className="container-main">
      <div className="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 sm:grid-cols-2 mt-14 mb-14">
        {aboutData.map((item) => (
          <div
            key={item.id}
            className="group aspect-[1174/1000] w-full cursor-pointer rounded-sm border border-blue-gray bg-white p-4 transition-colors duration-300 hover:bg-primary hover:text-white"
          >
            <div className="flex h-auto flex-col items-center gap-4">
              <div className="inline-block transition-all duration-300">
                <img
                  src={item.img}
                  className="mx-auto transition-all duration-300 group-hover:invert group-hover:filter w-20 h-20"
                  alt={item.title}
                />
              </div>

              <div className="flex flex-col items-center gap-3">
                <p className="font-inter text-[32px] font-bold">{item.title}</p>
                <p className="font-poppins text-base font-normal text-center">
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
