import React from "react";
import Banner from "./../../Components/Banner/Banner";  
import Dropdown from "./../../Components/Dropdown/Dropdown";  
import AboutData from "../../Data/dataAbout.json";  // Import des données depuis un fichier JSON
import "./About.scss"; 

// Composant About qui affiche une bannière et des dropdowns
const About = () => {
  return (
    <main className="about">
      {/* Affichage de la bannière pour la page About */}
      <Banner txt="" page="about" />

      {/* On mappe les données AboutData pour afficher un Dropdown pour chaque élément */}
      {AboutData.map((data) => (
        // Pour chaque item dans AboutData, on crée un composant Dropdown
        <Dropdown
          className="dropdown"
          key={data.title}  // La clé unique pour chaque Dropdown
          title={data.title}  // Le titre du Dropdown
          content={data.description}  // Le contenu (description) du Dropdown
          page="about"  // Spécifie la page pour le Dropdown
        />
      ))}
    </main>
  );
};

export default About;
