import React from "react"; 
import "./Error.scss"; 
import { Link } from "react-router-dom"; // Importation de Link pour la navigation entre les pages

// Composant por afficher la page d'erreur
const Error = () => {
  // Déclaration des messages de la page d'erreur
  const errorMessage = "Oups! La page que vous demandez n'existe pas."; // Message d'erreur
  const headingText = "404"; // Titre principal : code d'erreur HTTP
  const linkText = "Retourner sur la page d'accueil"; // Texte du lien de redirection

  // Retourne le contenu à afficher dans la page
  return (
    <main className="error">
      {/* Titre de la page d'erreur */}
      <h1 className="error-heading">{headingText}</h1>
      
      {/* Message d'erreur */}
      <p className="error-paragraph">{errorMessage}</p>
      
      {/* Lien pour retourner à la page d'accueil */}
      <Link className="error-link" to="/">
        {linkText}
      </Link>
    </main>
  );
};

export default Error; 
