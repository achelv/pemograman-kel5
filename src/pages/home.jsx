import React from "react";
import TeamCard from "../components/TeamCard";
import logo from "../assets/logo.jpg";

import shely from "../assets/ijazah.jpg";
import navian from "../assets/dwi.jpeg";
import andra from "../assets/andra.jpeg";

function Home() {
  const team = [
    { name: "Shely Rahmatika Devi", route: "/shely-rahmatika", image: shely },
    { name: "Dwiki Ilman Navian", route: "/navi-profile", image: navian },
    { name: "Diyah Ayu Juliandra", route: "/andra-profile", image: andra },
    { name: "Shely Rahmatika Devi", route: "/shely-profile", image: "src/assets/ijazah.jpg" },
    { name: "Dwiki Ilman Nafian", route: "/navi-profile", image: "src/assets/dwi.jpeg" },
    { name: "Diyah Ayu Juliandra", route: "/andra-profile", image: "src/assets/andra.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
      <img src={logo} alt="logo" className="w-24 mb-4" />

      <h1 className="text-5xl font-extrabold mb-10">
        Anggota Kelompok 5
      </h1>

      <div className="flex gap-6 flex-wrap justify-center">
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