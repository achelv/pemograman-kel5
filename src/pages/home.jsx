import React from "react";
import TeamCard from "../components/TeamCard";
import logo from "../assets/logo.jpg"; 

function Home() {
  const team = [
    { name: "Shely Rahmatika Devi", route: "/shely-profile", image: "src/assets/ijazah.jpg" },
    { name: "Diyah Ayu Juliandra", route: "/andra-profile", image: "/assets/shely.jpg" },
    { name: "Dwiki Ilman Nafian", route: "/navi-profile", image: "src/assets/dwi.jpeg" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-green-50">

      {/* 🔝 HEADER */}
      <header className="w-full bg-green-600 text-white flex items-center gap-4 px-6 py-4 shadow-md">
        {/* LOGO KIRI */}
        <img 
          src={logo} 
          alt="logo" 
          className="w-12 h-12 object-cover rounded-full"
        />

        <h1 className="text-2xl font-bold">Kelompok 5</h1>
      </header>

      {/* 🔥 CONTENT */}
      <main className="flex flex-col items-center flex-grow p-6">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-800">
          Profil Tim
        </h1>

        <p className="text-gray-600 mb-8">
          Anggota Kami
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              route={member.route}
              image={member.image}
            />
          ))}
        </div>
      </main>

      {/* 🔻 FOOTER */}
      <footer className="bg-green-700 text-white text-center py-4">
        <p>© 2026 Kelompok 5</p>
        <p className="text-sm opacity-80">Built with React & Tailwind</p>
      </footer>

    </div>
  );
}

export default Home;