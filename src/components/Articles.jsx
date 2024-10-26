import articles from "../seeders/articles.json";

export default function Articles() {
  return (
    <section className="w-full py-8 mb-20">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <h1 className="text-[32px] font-bold mb-4 sm:mb-0">Baca juga</h1>
        <div className="flex items-center border border-[#c00] px-6 py-2 rounded-full transition-colors duration-300 hover:bg-[#c00] fill-[#c00] text-[#c00] hover:text-white hover:fill-white cursor-pointer">
          <h1 className="uppercase text-[13px] font-bold tracking-[0.2rem] mr-2">
            lihat semua artikel
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15.28 9.47a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 1 1-1.06-1.06L13.69 10 9.97 6.28a.75.75 0 0 1 1.06-1.06l4.25 4.25ZM6.03 5.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L8.69 10 4.97 6.28a.75.75 0 0 1 1.06-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      <div className="w-full pt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col items-center">
              <div className="flex flex-col items-center w-[410px] bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:-translate-y-2">
                <img
                  src={article.imageUrl}
                  className="w-full h-[410px] object-cover"
                  alt={article.title}
                />
                <div className="w-full p-4">
                  <h1 className="text-[20px] font-bold mb-2 h-[80px] overflow-hidden">
                    {article.title}
                  </h1>
                  <div className="flex gap-2 items-center mb-2 h-[24px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <p className="text-[14px]">{article.date}</p>
                  </div>
                  <div className="flex items-center pt-4 text-[#c00] cursor-pointer hover:text-red-600">
                    <h1 className="text-[12.8px] font-bold tracking-widest uppercase mr-1">
                      lanjutkan membaca
                    </h1>
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
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
