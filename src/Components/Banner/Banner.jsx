import React from "react";
import "./Banner.scss";

// composant Baner
const Banner = ({ page, txt }) => (
  // La div principale représente la bannière. Elle a des classes CSS dynamiques en fonction des props.
  <div className={`banner banner--mobile banner--${page}`}>
    <div>{/* Affichage du texte transmis par la prop "txt" */}
    <span className="banner-text">{txt}</span></div>
  </div>
);

export default Banner; // Exportation du composant
 
