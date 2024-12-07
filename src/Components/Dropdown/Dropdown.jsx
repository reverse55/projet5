import React, { useState } from "react";
import "./Dropdown.scss";

const Dropdown = ({ title, content, page }) => {
  // État pour gérer l'ouverture et la fermeture du dropdown
  const [open, setOpen] = useState(false);

  // Fonction pour basculer l'état (ouvrir/fermer)
  const toggleDropdown = () => setOpen(!open);

  return (
    <div className="dropdown">
      {/* Bouton du dropdown */}
      <div className={`dropdown-button dropdown-button--${page}`}>
        {title} {/* Affiche le titre */}
        
        {/* Flèche pour ouvrir/fermer le dropdown */}
        <img
          className={`dropdown-button-arrow dropdown-button-arrow--${page} dropdown-button-arrow--${
            open ? "open" : "close"
          }`} // Change l'orientation de l'icône selon l'état
          src="/Arrow-back.png" // Icône de la flèche
          alt="Dropdown icon" // Texte alternatif pour l'accessibilité
          onClick={toggleDropdown} // Appelle la fonction pour ouvrir/fermer
        />
      </div>

      {/* Liste déroulante, affichée si `open` est vrai */}
      <ul
        className={`dropdown-list dropdown-list--${open ? "open" : "close"}`} // Classe dynamique pour ouvrir ou fermer
      >
        {/* Affichage des éléments du contenu */}
        {(Array.isArray(content) ? content : [content]).map((item, index) => (
          <li
            className={`dropdown-list-item dropdown-list-item--${page}`} // Style différent pour chaque page
            key={index} // Clé unique pour chaque élément
          >
            {item} {/* Affiche chaque élément */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
