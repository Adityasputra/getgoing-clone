import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

export default function AppSlider() {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto ">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div className="w-[600px] h-[350px] pl-0 pr-2">
                <img
                  src="https://images.unsplash.com/photo-1527249014055-1b2b9d5e9fbe?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide Image"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>

              <div className="w-1/2 text-center">
                <div className="mx-16 tracking-widest">
                  <p className="text-gray-500 mb-5 uppercase text-[16px] tracking-[0.5rem] font-light ">
                    Eksplor dan nikmati mudah liburan ke luar negeri dengan
                  </p>
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Aplikasi GetGoing
                  </h2>
                  <p className="text-gray-500 text-xl uppercase">
                    dapat di download di:
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="block">
                      <img
                        src="./app-store.svg"
                        alt="App Store"
                        className="w-36"
                      />
                    </a>
                    <a href="#" className="block">
                      <img
                        src="./play-store.svg"
                        alt="Google Play"
                        className="w-36"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div className="w-[600px] h-[350px] pl-0 pr-2">
                <img
                  src="https://images.unsplash.com/photo-1465311440653-ba9b1d9b0f5b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Slide Image"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>

              <div className="w-1/2">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-500 mb-5 uppercase text-[16px] tracking-[0.5rem] font-light">
                    apa yang getgoing punya?
                  </p>

                  <div className="flex items-center justify-start space-x-4 w-full max-w-md p-4 transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="p-4 rounded-full bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-6 h-6"
                      >
                        <path d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208l24.9 0L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320L80 320 5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5L192 448l0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 168.5 0c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320l33.4 0c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208l24.9 0c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">Trip Planner</h2>
                      <p className="text-gray-500 mt-2">
                        Susun Rute Perjalananmu Sendiri
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-start space-x-4 w-full max-w-md p-4 transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="p-4 rounded-full bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="w-6 h-6"
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">Guide</h2>
                      <p className="text-gray-500 mt-2">
                        Tour Guide Berbahasa Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-start space-x-4 w-full max-w-md p-4 transform transition-transform duration-300 hover:-translate-y-2">
                    <div className="p-4 rounded-full bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="w-6 h-6"
                      >
                        <path d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">Info</h2>
                      <p className="text-gray-500 mt-2">
                        Info penting di luar negeri
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
