import React from "react";
import foto from "../assets/andra.jpeg"; // 

function AndraProfile() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center justify-center p-6">

      <h1 className="text-4xl font-bold mb-4">Diyah Ayu Juliandra</h1>

      <div className="text-center text-gray-800 space-y-1">
        <p><span className="font-semibold">Kelas:</span> T2E</p>
        <p><span className="font-semibold">Jurusan:</span> Teknologi Informasi</p>
        <p><span className="font-semibold">Domisili:</span> Tuban</p>
      </div>

      <img
      src={foto}
      alt="profile"
      className="w-48 h-48 rounded-full my-6 shadow-lg"
      />
      <p className="max-w-xl text-center text-gray-800">
        Halo! Saya adalah Diyah Ayu Juliandra, mahasiswa Teknologi Informasi 
        Universitas Brawijaya yang memiliki minat kuat di bidang teknologi, 
        terutama UI/UX. Saya berfokus untuk terus mengasah kemampuan dalam merancang 
        antarmuka yang intuitif serta memberikan pengalaman pengguna yang optimal. 
        Selain itu, saya memiliki ketertarikan dalam memahami kebutuhan pengguna dan 
        menerjemahkannya ke dalam desain yang fungsional, estetis, dan mudah digunakan. 
        Saya juga terbiasa untuk terus belajar, beradaptasi dengan perkembangan teknologi, 
        serta meningkatkan keterampilan melalui berbagai proyek dan eksplorasi di bidang desain digital.
      </p>

    </div>
  );
}

export default AndraProfile;