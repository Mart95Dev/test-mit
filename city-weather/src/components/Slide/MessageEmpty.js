import React from "react";

function MessageEmpty() {
  return (
    <div className="text-[#393838] flex flex-col absolute top-48 left-8">
      <span className="text-3xl text-red-600">OUPS !</span>
      <span className="text-xl">
        {" "}
        Vous avez oublié de lancer une recherche{" "}
      </span>
      <div className="absolute top-52 rotate-6 left-24">
        <span className="text-4xl">Inconnue</span>
      </div>
    </div>
  );
}

export default MessageEmpty;
