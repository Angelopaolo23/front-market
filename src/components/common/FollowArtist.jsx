import React from "react";

export const FollowArtist = (artistData) => {
  return (
    <div className="mt-6">
      <h2 className="font-semibold mb-2">Artista</h2>
      <div className="flex items-center">
        <img
          src={artistData?.photo}
          alt={artistData?.username}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <p className="font-semibold">{artistData?.username}</p>
          <p className="text-sm text-gray-600">613 seguidores</p>
        </div>
      </div>
      <button className="mt-2 border border-gray-300 text-black font-semibold py-1 px-4 rounded-full">
        Seguir
      </button>
    </div>
  );
};
