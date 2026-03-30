import React from "react";
import { Link } from "react-router-dom";

function TeamCard({ name, route, image }) {
  return (
    <Link
      to={route}
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col items-center"
    >
      <img src={image} alt={name} className="w-24 h-24 rounded-full mb-4" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">Klik untuk lihat profil</p>
    </Link>
  );
}

export default TeamCard;