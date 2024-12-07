
import React from "react";  // Import de React pour créer un composant fonctionnel
import "./Header.scss";    
import { NavLink } from "react-router-dom";  // Import du composant NavLink pour la gestion de la navigation


const Header = () => (
  // La balise <header> pour définir la zone de l'en-tête, avec une classe CSS associée
  <header className="header">
    
    {/* Balise <img> pour afficher le logo de l'application */}
    <img className="header-logo" src="/logo-orange.png" alt="Logo_Kasa" />
  
    
    {/* La balise <nav> pour regrouper les liens de navigation */}
    <nav className="header-navbar">
      {/* Création des liens de navigation à l'aide de .map() sur un tableau de chemins */}
      {["/", "/about"].map((path, index) => (
        
        // Le composant NavLink permet de définir un lien avec un comportement de navigation spécifique
        <NavLink
          key={index}  // Chaque élément doit avoir une clé unique pour React
          
          // Définition dynamique de la classe CSS en fonction du lien actif
          className={({ isActive }) =>
            // Si le lien est actif (la route correspond à celui du NavLink), la classe "active" est ajoutée
            `header-navbar-link${isActive ? " active" : ""}`
          }
          
          // Définition du chemin de destination pour chaque lien
          to={path}
        >
          {/* Le texte du lien change selon le chemin */}
          {path === "/" ? "Accueil" : "A Propos"}
        </NavLink>
      ))}
    </nav>
  </header>
);

export default Header; // Exportation du composant Header pour pouvoir l'utiliser ailleurs
