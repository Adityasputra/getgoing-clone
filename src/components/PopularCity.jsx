import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import countries from "../seeders/countries.json";

export default function PopularCity() {
  return (
    <>
      <div className="w-full overflow-visible">
        <div className="">
          <h1 className="text-[32px] font-bold">
            Kota <span className="text-[#c00]">Populer</span>
          </h1>
        </div>
        <div className="mx-auto p-4 overflow-visible">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper overflow-visible"
          >
            {countries.map((country, index) => (
              <SwiperSlide key={index} className="overflow-visible">
                <div className="flex flex-col mb-12 py-4 transform transition-transform duration-300 hover:-translate-y-2 ">
                  <div className="relative w-[14.2rem] h-[22rem] ">
                    <img
                      src={country.photo}
                      alt={country.country}
                      className="w-full h-full object-cover rounded-[20px]"
                    />
                    <div
                      className="absolute inset-0 rounded-[20px]"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
                      }}
                    ></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 rounded-lg">
                      <h1 className="text-white text-2xl font-bold">
                        {country.country}
                      </h1>
                      <p className="text-gray-200 text-lg">{country.capital}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
