export default function Footer() {
  return (
    <footer className="bg-[#c00] text-white pt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">INFORMASI KONTAK</h3>
          <div className="flex items-start gap-3 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p>
              BSD Green Office Park 1, 6th Floor, BSD City, Tangerang, Banten
              15345
            </p>
          </div>
          <div className="flex items-start gap-3 mb-3">
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
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p>24/7 - Online</p>
          </div>
          <div className="flex items-start gap-3 mb-3">
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
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <p>Email: lets@getgoing.co.id</p>
          </div>
          <p>Instagram: @getgoing.co.id</p>
          <p>Facebook: @getgoing.co.id</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-6">DOWNLOAD DI</h3>
          <div className="flex flex-col items-center">
            <a href="#" className="flex justify-center">
              <img
                src="https://seeklogo.com/images/A/app-store-google-play-logo-4A2747BF5E-seeklogo.com.png"
                alt="Download on the App Store"
                className="h-28"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">LAINNYA</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Syarat dan Ketentuan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Kebijakan Privasi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Dokumentasi
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Penghargaan
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                F.A.Q
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-black py-4 mt-8 text-sm">
        <div className="flex mx-24 justify-between">
          <p>© 2024 - PT. Gue Eksplorasi Terus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
