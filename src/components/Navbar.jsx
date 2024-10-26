import { useEffect, useState } from "react";

export default function Navbar() {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsShrunk(true);
        setIsFixed(true);
      } else {
        setIsShrunk(false);
        setIsFixed(false);
      }
    };

    // Add event listener when the component is mounted
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove event listener when the component is unmounted
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between px-6 transition-all duration-300 ${
        isFixed
          ? "fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-lg mt-5"
          : ""
      } ${isShrunk ? "h-[70px] py-2" : "h-[121px]"}`}
    >
      <div className="flex items-center space-x-2 w-[20%]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahcvALz5u3MzkTHa4a0Rfmnv9AK5XkdlXPA&s"
          alt="Logo"
          className={`w-16 h-16 transition-all duration-300 ${
            isShrunk ? "w-12 h-12" : "w-16 h-16"
          }`}
        />
        <div
          className={`flex flex-col transition-all duration-300 ${
            isShrunk ? "text-sm" : "text-2xl"
          }`}
        >
          <span className="font-poppins font-bold text-black">GET</span>
          <span className="font-poppins font-bold text-black">GOING</span>
        </div>
      </div>

      <div className="flex items-center w-[40%] bg-white shadow-lg shadow-[#c00]/50 rounded-full px-4 py-2">
        <input
          type="text"
          placeholder="Cari negara, kota atau guide"
          className="w-full px-4 rounded-full text-gray-700 outline-none"
        />
        <button className="flex items-center justify-center bg-[#c00] p-2 rounded-full text-white ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0L13.5 19.5M21 12H3"
            />
          </svg>
        </button>
      </div>

      <div className="flex w-[40%] items-center justify-end space-x-4">
        <a href="#" className="text-[#FF0000] font-semibold">
          Beranda
        </a>
        <a href="#" className="text-[#e63946]">
          Servis Kami
        </a>
        <a href="#" className="text-[#e63946]">
          Blog
        </a>
        <a href="#" className="text-black tracking-widest font-semibold">
          LOGIN
        </a>
      </div>
    </nav>
  );
}
