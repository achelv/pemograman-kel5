import React from "react";
import TeamCard from "../components/TeamCard";
import logo from "../assets/logo.jpg"; // ⬅️ tambahin ini

function Home() {
  const team = [
    { name: "Shely Rahmatika Devi", route: "/shely-profile", image: "src/assets/ijazah.jpg" },
    { name: "Shely Rahmatika", route: "/shely-rahmatika", image: "/assets/shely.jpg" },
    { name: "Dwiki Ilman Navian", route: "/navi-profile", image: "src/assets/dwi.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold mb-10">Profil Tim</h1>
      {/* LOGO */}
      <img 
        src={logo} 
        alt="logo" 
        className="w-24 mb-4"
      />

      <h1 className="text-5xl font-extrabold mb-10">Anggota Kelompok 5</h1>

      <div className="flex gap-6">
        {team.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            route={member.route}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;