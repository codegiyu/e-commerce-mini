// import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./TeamMemberSlider.css";
import { Link } from "react-router-dom";

interface Icon {
  icn: string;
  name: string;
  link: string;
}

interface Member {
  name: string;
  image: string;
  position: string;
  icon: Icon[];
}

interface TeamMemberSliderProps {
  memberCard: Member[];
}

const TeamMemberSlider: React.FC<TeamMemberSliderProps> = ({ memberCard }) => {
  return (
    <div className="">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination]}
      >
        {memberCard.map((member, index) => {
          const { name, image, position, icon } = member;

          return (
            <SwiperSlide
              key={index}
              className="flex h-[580px] w-full rounded-md"
            >
              <div className="flex h-[100%] w-full flex-col">
                <div className="img-area flex h-[80%] w-full">
                  <img src={image} alt={name} />
                </div>

                <div className="text-area bg-white py-4">
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p className="text-xs">{position}</p>
                  <div className="mt-3 flex space-x-2">
                    {icon.map((itm, idx) => {
                      return (
                        <div className="" key={idx}>
                          <Link to={itm.link}>
                            <img
                              src={itm.icn}
                              alt={itm.name}
                              className="hover:opacity-70"
                            />
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TeamMemberSlider;
