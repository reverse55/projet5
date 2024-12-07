import React from "react";
import "./Stars.scss";

function Stars({ rating }) {
  return (
    <div className="stars">
      {/* Générer un tableau de 5 éléments pour représenter les étoiles */}
      {Array.from({ length: 5 }, (_, index) => (
        <span className="star" key={index}>
          {/* Si l'index est inférieur au rating, afficher une étoile pleine */}
          <img className="star-icone" src={index < rating ? "/star-active.png" : "/star6.png"} alt="icone-rating"/>
        </span>
      ))}
    </div>
  );
}

export default Stars;
