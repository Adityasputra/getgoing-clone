import Content from "./Content";

export default function PrivateTripSection() {
  return (
    <div className="w-full py-4 px-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl md:text-[32px] font-bold">
          "Better to <span className="text-[#c00]">SEE</span> something once
          than hear about it{" "}
          <span className="text-[#4183D1]">A THOUSAND TIMES</span>"
        </h1>
        <h2 className="text-xl md:text-[24px] font-semibold pt-2">
          - Asian Proverb.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-[32px] md:text-[40px] text-[#c00000] uppercase">
            Private Trip
          </h1>
          <h1 className="text-[32px] md:text-[40px] font-bold">
            Berangkat <span className="text-[#c00]">Kapan Saja</span> Semaumu
          </h1>
          <div className="mt-4">
            <Content />
          </div>
        </div>

        <div
          className="w-full md:w-1/2 bg-red-500 p-4 rounded-tl-[50px] rounded-bl-[50px]
        bg-gradient-to-r from-[#c00] to-orange-400"
        >
          <div className="grid grid-cols-2 gap-4 max-w-md py-8 mx-auto">
            <div className="bg-white/20 rounded-lg p-4 flex flex-col items-start">
              <div className="text-3xl text-white mb-2">
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <div className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="w-8 h-8"
                      aria-label="Konsultasi"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#EF4444" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304l91.4 0c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7l0 .9c0 9.2 2.7 18.5 7.9 26.3L29.7 512C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8l0 30.6c7.9 3.4 15.4 7.7 22.3 12.8l24.9-14.3c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-25 14.4c.4 4 .7 8.1 .7 12.3s-.2 8.2-.7 12.3l25 14.4c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-24.9-14.3c-6.9 5.1-14.3 9.4-22.3 12.8l0 30.6c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8l0-30.5c-8-3.4-15.6-7.7-22.5-12.9l-24.7 14.3c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l24.8-14.3c-.4-4.1-.7-8.2-.7-12.4s.2-8.3 .7-12.4L343.8 325c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l24.8 14.3c6.9-5.1 14.5-9.4 22.5-12.9l0-30.5zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z"
                        fill="url(#gradient)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold">Konsultasi GRATIS</h3>
              <p className="text-white">Curhatin aja semuanya!</p>
            </div>

            <div className="bg-white/20 rounded-lg p-4 flex flex-col items-start">
              <div className="text-3xl text-white mb-2">
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <div className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-8 h-8"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#EF4444" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        fill="url(#gradient)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold">Local Guide</h3>
              <p className="text-white">Biar ada temen!</p>
            </div>

            <div className="bg-white/20 rounded-lg p-4 flex flex-col items-start">
              <div className="text-3xl text-white mb-2">
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <div className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      className="w-8 h-8"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#EF4444" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M200 0c-30.6 0-56 54.7-56 86.1l0 106.5L7.8 274.3C2.9 277.2 0 282.4 0 288l0 64c0 5.1 2.4 9.8 6.4 12.8s9.3 3.9 14.1 2.5l123.4-37 0 81.2-50 40c-3.8 3-6 7.6-6 12.5l0 32c0 5.1 2.5 10 6.6 13s9.5 3.8 14.4 2.2L200 480.9 290.4 511c-1.6-4.7-2.4-9.8-2.4-15l0-32.6c-18.2-10.5-30.7-29.7-31.9-51.8l-.1-.1 0-3.5 0-82.5L256 184l0-1.1s0 0 0 0l0-96.9C256 54.7 231.5 0 200 0zm88 176l0 224c0 20.9 13.4 38.7 32 45.3l0 42.7c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-40 160 0 0 40c0 13.3 10.7 24 24 24l16 0c13.3 0 24-10.7 24-24l0-42.7c18.6-6.6 32-24.4 32-45.3l0-224c0-26.5-21.5-48-48-48l-256 0c-26.5 0-48 21.5-48 48zm79.8 78.7c3.3-8.7 11.2-14.7 20.5-14.7l151.4 0c9.2 0 17.2 6 20.5 14.7L576 304l-224 0 15.8-49.3zM568 352a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM336 376a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                        fill="url(#gradient)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold">Transportasi</h3>
              <p className="text-white">Bebas pilih transportasi apa</p>
            </div>

            <div className="bg-white/20 rounded-lg p-4 flex flex-col items-start">
              <div className="text-3xl text-white mb-2">
                <div className="bg-white p-4 rounded-lg flex items-center">
                  <div className="rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="w-8 h-8"
                    >
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="0"
                        >
                          <stop offset="0%" stopColor="#EF4444" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        fill="url(#gradient)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-white font-bold">Lengkap Pokoknya</h3>
              <p className="text-white">Hotel, Asuransi, Visa, Wifi dll</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
