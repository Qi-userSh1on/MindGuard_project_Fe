import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DailyCheckinPage() {
  const navigate = useNavigate();

  // State untuk menyimpan nilai input secara dinamis
  const [values, setValues] = useState({
    tidur_jam: 0,
    tidur_menit: 0,
    minum_gelas: 0,
    // ... tambahkan yang lain
  });

  // Fungsi untuk menambah/mengurang nilai
  const handleUpdate = (key, delta) => {
    setValues((prev) => ({
      ...prev,
      [key]: Math.max(0, prev[key] + delta), // Supaya tidak minus
    }));
  };

  const handlePrediksi = (title) => {
    alert(`Menganalisis data untuk: ${title}`);
    // Di sini kamu bisa masukkan logika navigasi atau hitung rumus
  };

  return (
    <div className="min-h-screen bg-sky-300 p-6 md:p-12 relative">
      {/* Tombol Back */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-8 text-2xl font-bold text-gray-800"
      >
        &lt;
      </button>

      <div className="max-w-3xl mx-auto space-y-6 mt-10">
        {/* Contoh Satu Card: Prediksi Tidur */}
        <div className="bg-white rounded-[35px] p-8 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-4">
            PREDIKSI KUALITAS TIDUR
          </h3>
          <div className="flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex gap-4 flex-1">
              {/* Input Jam */}
              <div className="flex-1">
                <label className="text-[10px] font-bold text-gray-400 block mb-1">
                  JAM
                </label>
                <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2">
                  <button
                    onClick={() => handleUpdate("tidur_jam", -1)}
                    className="text-gray-500 font-bold"
                  >
                    -
                  </button>
                  <span className="text-gray-800">{values.tidur_jam}</span>
                  <button
                    onClick={() => handleUpdate("tidur_jam", 1)}
                    className="text-gray-500 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
              {/* Input Menit */}
              <div className="flex-1">
                <label className="text-[10px] font-bold text-gray-400 block mb-1">
                  MENIT
                </label>
                <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2">
                  <button
                    onClick={() => handleUpdate("tidur_menit", -1)}
                    className="text-gray-500 font-bold"
                  >
                    -
                  </button>
                  <span className="text-gray-800">{values.tidur_menit}</span>
                  <button
                    onClick={() => handleUpdate("tidur_menit", 1)}
                    className="text-gray-500 font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => handlePrediksi("Kualitas Tidur")}
              className="bg-sky-400 hover:bg-sky-500 active:scale-95 transition-all text-white font-bold px-8 py-2 rounded-xl text-xs uppercase"
            >
              PREDIKSI
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
