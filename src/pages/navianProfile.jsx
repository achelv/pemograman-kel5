import React from "react";
import TeamCard from "../components/TeamCard";

export default function navianProfile() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Navian</h1>
      <img
        src="/path-to-navi-photo.jpg"
        alt="Navi Profile"
        className="w-40 h-40 rounded-full mb-4"
      />
      <p className="text-gray-700 max-w-xl text-center mb-6">
        Halo! Saya Navi, siswa kelas 12 jurusan RPL. Saya tertarik dengan web
        development dan desain UI/UX. Saya suka membuat halaman profil yang
        menarik dan responsif menggunakan Tailwind CSS. Saya berharap bisa
        belajar lebih banyak tentang React dan kolaborasi tim dalam proyek ini.
        {/* Tambahkan minimal 100 kata */}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TeamCard name="Navian" role="Front-end Developer" />
      </div>
    </div>
  );
}