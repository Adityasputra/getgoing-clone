import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import profiles from "../seeders/profiles.json";

export default function PopularProfiles() {
  return (
    <div className="w-full">
      <div className="py-4">
        <h2 className="text-[32px] font-bold">
          Sedang <span className="text-[#c00]">Populer</span>
        </h2>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {profiles.map((profile, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="mb-6 px-2 py-4">
              <div className="relative group transition-transform duration-300 hover:-translate-y-2">
                <img
                  src={profile.img}
                  alt={profile.name}
                  className="w-[207px] h-[207px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 w-[207px] h-[207px] rounded-lg bg-gradient-to-t from-black opacity-50"></div>
              </div>
              <div className="mt-3">
                <h3 className="text-[18px] font-semibold">{profile.name}</h3>
                <p className="text-[14px] text-gray-500">{profile.location}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
