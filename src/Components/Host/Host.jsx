import React from "react";
import "./Host.scss";

const Host = ({ name, picture }) => {
  // découpe le nom complet en prénom et nom de famille
  const [firstName, lastName] = name.split(" ");

  return (
    <div className="host">
      <div>
        {/* Affichage du prénom */}
        <p className="host-name host-name--firstName">{firstName}</p>
        {/* Affichage du nom de famille */}
        <p className="host-name host-name--lastName">{lastName}</p>
      </div>
      {/* Affichage de l'image de l'hôte */}
      <img src={picture} alt={name} className="host-picture" />
    </div>
  );
};

export default Host;
