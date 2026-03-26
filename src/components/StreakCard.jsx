export default function StreakCard() {
  const days = [
    "senin",
    "selasa",
    "rabu",
    "kamis",
    "jumat",
    "sabtu",
    "minggu",
  ];

  return (
    <div className="bg-blue-200 rounded-2xl p-5 mt-6">
      <h3 className="font-semibold">
        Streak
      </h3>

      <p className="text-sm text-gray-700">
        Bukan sekedar angka, streak bantu anda
        cegah burn out
      </p>

      <h2 className="text-2xl font-bold mt-2">
        1⚡
      </h2>

      <div className="flex gap-3 mt-4">
        {days.map((day, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full" />

            <p className="text-xs mt-1">
              {day}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}