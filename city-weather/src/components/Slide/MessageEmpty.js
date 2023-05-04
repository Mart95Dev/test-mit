import React from "react";

function MessageEmpty() {
  return (
    <>
      <div className="text-[#393838] flex flex-col absolute top-40  w-full">
        <span className="text-center text-3xl text-red-600">OUPS !</span>
        <span className=" text-center text-xl">Vous avez oublié de saisir</span>
        <span className="text-center text-xl">le nom d'une ville</span>
      </div>
      <div className="absolute bottom-[21rem] left-32 rotate-6">
        <span className="text-center text-4xl">Inconnue</span>
      </div>
    </>
  );
}

export default MessageEmpty;
