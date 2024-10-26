import { useState } from "react";
import testimoni from "../seeders/testimoni.json";

export default function Testimoni() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimoni.length);
  };

  // Function to handle previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimoni.length - 1 : prevIndex - 1 // If the current index is 0, set it to the last index
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-4xl font-extrabold bg-clip-text mb-4">
          Kata <span className="text-[#c00]">Mereka</span>
        </h1>
        <p className="text-lg text-gray-500 text-center max-w-md">
          Cerita dari mereka yang telah menjelajahi Eropa bersama kami
        </p>
      </div>

      <div className="relative flex flex-col items-center rounded-lg p-6 transition duration-500 ease-in-out">
        <div className="absolute flex items-center gap-4 bottom-4 left-4">
          <button
            onClick={handlePrev}
            className="bg-gray-300 text-white p-2 rounded-full shadow-md hover:bg-red-600 hover:scale-105 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="bg-gray-300 text-white p-2 rounded-full shadow-md hover:bg-red-600 hover:scale-105 transition duration-300 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col w-full md:w-1/2 space-y-4 mb-4 md:mb-0">
            <h2 className="text-[24px] font-bold text-gray-800">
              {testimoni[currentIndex].title}
            </h2>
            <p className="text-[14px] text-gray-600 text-md">
              {testimoni[currentIndex].content}
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className="rounded-lg overflow-hidden p-4 shadow-lg transition-transform duration-500 transform hover:scale-105"
              style={{ maxWidth: "400px", width: "100%" }}
            >
              <img
                className="w-full h-48 object-cover"
                src={testimoni[currentIndex].img}
                alt={testimoni[currentIndex].name}
              />
              <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">
                  {testimoni[currentIndex].name}
                </div>
                <p className="text-gray-500 text-base">
                  {testimoni[currentIndex].job}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
