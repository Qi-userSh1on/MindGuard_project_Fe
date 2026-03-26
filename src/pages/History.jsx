import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const History = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const filterParam = query.get("filter");

  const [filteredLogs, setFilteredLogs] = useState([]);
  const [activeFilterLabel, setActiveFilterLabel] = useState("Semua Riwayat");

  useEffect(() => {
    // =========================
    // DATA DUMMY (UNTUK TEST)
    // =========================

    const data = [
      {
        id: 1,
        status: "Sehat",
        note: "Tidur cukup",
        date: "2026-03-26",
      },
      {
        id: 2,
        status: "Kurang Tidur",
        note: "Tidur hanya 4 jam",
        date: "2026-03-25",
      },
      {
        id: 3,
        status: "Stres",
        note: "Banyak tugas",
        date: "2026-03-24",
      },
    ];

    // =========================
    // LABEL FILTER
    // =========================

    const labels = [
      "Hari Ini",
      "Kemarin",
      "2 Hari Lalu",
      "3 Hari Lalu",
      "4 Hari Lalu",
      "5 Hari Lalu",
      "6 Hari Lalu",
      "7 Hari Lalu",
    ];

    // =========================
    // JIKA ADA FILTER
    // =========================

    if (filterParam !== null) {
      const daysBack = parseInt(filterParam);

      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() - daysBack);

      const result = data.filter((log) => {
        const logDate = new Date(log.date);

        return (
          logDate.getDate() === targetDate.getDate() &&
          logDate.getMonth() === targetDate.getMonth() &&
          logDate.getFullYear() === targetDate.getFullYear()
        );
      });

      setFilteredLogs(result);

      setActiveFilterLabel(
        labels[daysBack] ||
          `Data Tanggal ${targetDate.toLocaleDateString("id-ID")}`,
      );
    }

    // =========================
    // TANPA FILTER → SEMUA DATA
    // =========================
    else {
      setFilteredLogs(data);
      setActiveFilterLabel("Semua Riwayat");
    }
  }, [filterParam]);

  return (
    <div className="w-full min-h-screen px-4 sm:px-6 lg:px-10 py-6 bg-slate-50">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-black font-black text-sm uppercase hover:-translate-x-1 transition-transform"
        >
          <ArrowLeft size={20} />
          Kembali
        </button>

        <button
          onClick={() => {
            alert("Belum ada data untuk dihapus");
          }}
          className="text-red-500 font-bold text-[10px] uppercase border border-red-100 px-3 py-2 rounded-xl hover:bg-red-50"
        >
          Hapus Semua
        </button>
      </div>

      {/* TITLE */}
      <div className="mb-8">
        <h2 className="text-4xl font-black text-black tracking-tighter mb-2">
          RIWAYAT <span className="text-slate-300">LOG</span>
        </h2>

        <div className="flex items-center gap-2">
          <div className="px-3 py-1 bg-black text-white text-[10px] font-black rounded-full uppercase italic">
            {activeFilterLabel}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="space-y-6">
        {filteredLogs.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[40px] border-2 border-dashed border-slate-200">
            <Clock className="mx-auto mb-4 text-slate-200" size={48} />

            <p className="text-slate-400 font-bold text-sm uppercase tracking-widest mb-2">
              Belum Ada Data Riwayat
            </p>

            <p className="text-slate-400 text-xs">
              Silakan isi form kesehatan terlebih dahulu
            </p>

            <button
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-3 bg-black text-white text-xs font-bold rounded-xl hover:scale-105 transition"
            >
              Isi Form Sekarang
            </button>
          </div>
        ) : (
          filteredLogs.map((log) => (
            <div
              key={log.id}
              className="bg-white rounded-[30px] p-6 flex items-center justify-between shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle2 size={20} className="text-green-500" />
                </div>

                <div>
                  <p className="font-bold text-sm">{log.status}</p>

                  <p className="text-xs text-slate-500">{log.note}</p>

                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-400">
                    <Calendar size={14} />

                    {new Date(log.date).toLocaleDateString("id-ID")}
                  </div>
                </div>
              </div>

              <ChevronRight size={20} className="text-slate-300" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default History;
