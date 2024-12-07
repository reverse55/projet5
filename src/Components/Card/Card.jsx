import React from "react";
import { Link } from "react-router-dom"; // Importation de Link de react-router-dom pour gérer la navigation
import "./Card.scss"; 

// Composant Card : prend trois props : title, cover, id
function Card(props) {
  // Nous extrayons les props dans des variables séparées pour plus de clarté
  const { title, cover, id } = props;

  // La balise <Link> permet de naviguer vers une autre route sans recharger la page
  return (
    <Link className="card" to={`/logement/${id}`}>
      {/* Affichage du titre dans une balise div */}
      <div className="card-title">{title}</div>
      
      {/* Affichage de l'image de couverture */}
      <img className="card-image" src={cover} alt={title} />
    </Link>
  );
}

export default Card;
