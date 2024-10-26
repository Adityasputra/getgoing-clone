export default function Content() {
  const features = [
    "Tentukan tanggal keberangkatan sesukamu",
    "Tidak ada kuota minimum, jadi pasti berangkat",
    "Liburan jadi lebih exclusive untuk kamu dan keluarga",
    "Fleksibel, bebas tentukan destinasi dan aktivitas perjalanan",
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <defs>
              <linearGradient
                id={`gradient-${index}`}
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
              fill={`url(#gradient-${index})`}
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-gray-400">{feature}</p>
        </div>
      ))}
    </div>
  );
}
