import React from "react";
import TeamCard from "../components/TeamCard";
import navi from "../assets/dwi.jpeg";

function NavianProfile() {
  return (
    <div className="min-h-screen bg-green-100 flex flex-col items-center justify-center p-6">
      <img
        src={navi}
        alt="navi"
        className="w-48 h-48 rounded-full mb-6 shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-2">Dwiki Ilman Nafian</h1>
      <p className="text-gray-700 mb-2">Mahasiswi Teknologi Informasi | Kelas T2E | Domisili: Ponorogo</p>
      <p className="max-w-xl text-center mt-4 text-gray-800">
        Halo! Saya Dwiki Ilman Nafian. Saya memiliki semangat belajar tinggi,
        disiplin,dan bertanggung jawab dalam setiap pekerjaan yang dilakukan.
        Saya terbiasa bekerja secara mandiri maupun dalam tim, 
        serta mampu beradaptasi dengan lingkungan baru. Saya memiliki ketertarikan pada pengembangan diri,
        teknologi,dan kreativitas,sehingga selalu berusaha meningkatkan kemampuan yang dimiliki.
        Dengan komunikasi yang baik dan sikap yang positif,saya siap menghadapi tantangan serta memberikan kontribusi terbaik.
        Saya percaya bahwa konsistensi,kerja keras,dan kemauan untuk terus belajar adalah kunci utama untuk mencapai tujuan dan berkembang menjadi pribadi yang lebih baik setiap harinya.
      </p>
    </div>
  );
}

export default NavianProfile;