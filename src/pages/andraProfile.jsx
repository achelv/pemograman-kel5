import React from "react";
import navi from "../assets/andra.jpeg";

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
          src={andra}
          alt="andra"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-green-200 shadow-md"
        />

        {/* NAMA */}
        <h1 className="text-2xl font-bold text-gray-800">
          Diyah Ayu Juliandra
        </h1>

        {/* INFO */}
        <p className="text-gray-600 mt-2">
          Mahasiswi Teknologi Informasi | Kelas T2E
        </p>
        <p className="text-gray-500 text-sm">
          Domisili: Tuban
        </p>

        {/* DESKRIPSI */}
        <p className="text-gray-700 mt-4 leading-relaxed text-justify">
          Halo! Saya adalah Diyah Ayu Juliandra, mahasiswa Teknologi Informasi 
        Universitas Brawijaya yang memiliki minat kuat di bidang teknologi, 
        terutama UI/UX. Saya berfokus untuk terus mengasah kemampuan dalam merancang 
        antarmuka yang intuitif serta memberikan pengalaman pengguna yang optimal. 
        Selain itu, saya memiliki ketertarikan dalam memahami kebutuhan pengguna dan 
        menerjemahkannya ke dalam desain yang fungsional, estetis, dan mudah digunakan. 
        Saya juga terbiasa untuk terus belajar, beradaptasi dengan perkembangan teknologi, 
        serta meningkatkan keterampilan melalui berbagai proyek dan eksplorasi di bidang desain digital.

          <br /><br />

        Saya berharap dapat terus mengembangkan diri dan berkontribusi dalam menciptakan solusi digital
        yang inovatif dan bermanfaat bagi banyak orang.
        </p>
      </div>

    </div>
  );
}

export default NavianProfile;