import React from "react";
import TeamCard from "../components/TeamCard";

function Home() {
  const team = [
    { name: "Shely Rahmatika", route: "/shely-rahmatika", image: "src/assets/ijazah.jpg" },
    { name: "Diyah Ayu Juliandra", route: "/andra-profile", image: "src/assets/andra.jpeg" },
    { name: "Dwiki Ilman Navian", route: "/navi-profile", image: "src/assets/dwi.jpeg" },
  ];
  

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold mb-10">Profil Tim</h1>
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