import React from "react";
import TeamCard from "../components/TeamCard";
import shely from "../assets/ijazah.jpg";

function ShelyProfile() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-6">
      <img
         src={shely}
         alt="Shely"
         className="w-48 h-48 rounded-full mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-2">Shely Rahmatika</h1>
      <p className="text-gray-700 mb-2">Kelas 12 RPL | Domisili: [Isi Domisili]</p>
      <p className="max-w-xl text-center mt-4 text-gray-800">
        Halo! Saya Shely Rahmatika. Saya menyukai teknologi, web design, dan React JS.
        Saya senang membuat desain yang simpel tapi menarik. Saya juga aktif belajar Tailwind CSS
        dan membuat project landing page dan profil tim. Saya selalu berusaha berkembang,
        belajar hal baru, dan bekerja sama dengan tim. Hobi saya termasuk membaca, coding, dan
        mencoba hal kreatif yang menantang. (Ini contoh deskripsi, bisa diisi minimal 100 kata)
      </p>
    </div>
  );
}

export default ShelyProfile;