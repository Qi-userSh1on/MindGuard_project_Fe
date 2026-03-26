import React from "react";
import { useNavigate } from "react-router-dom";

export default function DailyCheckinPage() {
  const navigate = useNavigate();

  const forms = [
    { title: "PREDIKSI KUALITAS TIDUR", inputs: ["JAM", "MENIT"] },
    {
      title: "PREDIKSI MINUM HARIAN",
      inputs: ["JUMLAH GELAS"],
      desc: "MASUKKAN JUMLAH GELAS YANG SUDAH KAMU MINUM HARI INI",
      btn: "CEK TARGET MINUM",
    },
    { title: "PREDIKSI OLAHRAGA", inputs: ["JAM", "MENIT"] },
    { title: "PREDIKSI ISTIRAHAT", inputs: ["JAM", "MENIT"] },
  ];

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
        {forms.map((form, index) => (
          <div key={index} className="bg-white rounded-[35px] p-8 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">{form.title}</h3>
            {form.desc && (
              <p className="text-[10px] text-gray-400 mb-2 uppercase">
                {form.desc}
              </p>
            )}

            <div className="flex flex-col md:flex-row md:items-end gap-6">
              <div className="flex gap-4 flex-1">
                {form.inputs.map((label, i) => (
                  <div key={i} className="flex-1">
                    <label className="text-[10px] font-bold text-gray-400 block mb-1">
                      {label}
                    </label>
                    <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 text-gray-400">
                      <span>-</span> <span>0</span> <span>+</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="bg-sky-400 text-white font-bold px-8 py-2 rounded-xl text-xs uppercase">
                {form.btn || "PREDIKSI"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
