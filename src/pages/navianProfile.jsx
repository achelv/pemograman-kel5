import React from "react";
import navi from "../assets/dwi.jpeg";

function NavianProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-50 flex flex-col items-center p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        Profil Anggota
      </h1>

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-xl w-full text-center">

        {/* FOTO */}
        <img
          src={navi}
          alt="navi"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-md"
        />

        {/* NAMA */}
        <h1 className="text-2xl font-bold text-gray-800">
          Dwiki Ilman Nafian
        </h1>

        {/* INFO */}
        <p className="text-gray-600 mt-2">
          Mahasiswi Teknologi Informasi | Kelas T2E
        </p>
        <p className="text-gray-500 text-sm">
          Domisili: Ponorogo
        </p>

        {/* DESKRIPSI */}
        <p className="text-gray-700 mt-4 leading-relaxed text-justify">
          Halo! Saya Dwiki Ilman Nafian. Saya memiliki semangat belajar tinggi,
          disiplin, dan bertanggung jawab dalam setiap pekerjaan yang dilakukan.
          Saya terbiasa bekerja secara mandiri maupun dalam tim, serta mampu 
          beradaptasi dengan lingkungan baru. Saya memiliki ketertarikan pada 
          pengembangan diri, teknologi, dan kreativitas, sehingga selalu berusaha 
          meningkatkan kemampuan yang dimiliki.

          <br /><br />

          Dengan komunikasi yang baik dan sikap yang positif, saya siap menghadapi 
          tantangan serta memberikan kontribusi terbaik. Saya percaya bahwa 
          konsistensi, kerja keras, dan kemauan untuk terus belajar adalah kunci 
          utama untuk mencapai tujuan dan berkembang menjadi pribadi yang lebih baik 
          setiap harinya.
        </p>
      </div>

    </div>
  );
}

export default NavianProfile;