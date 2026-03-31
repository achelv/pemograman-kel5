import React from "react";
import TeamCard from "../components/TeamCard";
import logo from "../assets/logo.jpg";

// ✅ IMPORT GAMBAR
import img1 from "../assets/ijazah.jpg";
import img2 from "../assets/andra.jpeg";
import img3 from "../assets/dwi.jpeg";

function Home() {
  const team = [
    { name: "Shely Rahmatika Devi", route: "/shely-profile", image: img1 },
    { name: "Diyah Ayu Juliandra", route: "/andra-profile", image: img2 },
    { name: "Dwiki Ilman Navian", route: "/navi-profile", image: img3 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-green-50">

      {/* 🔝 HEADER */}
      <header className="w-full bg-green-600 text-white flex items-center justify-between px-8 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Kelompok 5</h1>

        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 object-cover rounded-full"
        />
      </header>

      {/* 🔥 CONTENT */}
      <main className="flex flex-col items-center flex-grow p-6">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-800">
          Profil Tim
        </h1>

        <p className="text-gray-600 mb-8 text-center">
          Kenali anggota kelompok kami
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="hover:scale-105 transition duration-300"
            >
              <TeamCard
                name={member.name}
                route={member.route}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </main>

      {/* 🔻 FOOTER */}
      <footer className="bg-green-700 text-white text-center py-4 mt-10">
        <p>© 2026 Kelompok 5</p>
        <p className="text-sm opacity-80">Built with React & Tailwind</p>
      </footer>

    </div>
  );
}

export default Home;