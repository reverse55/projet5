import React from "react"; // Importation de la bibliothèque React pour pouvoir utiliser JSX
import Banner from "./../../Components/Banner/Banner"; 
import Card from "./../../Components/Card/Card"; 
import HomeData from "../../Data/dataLogement.json";

import "./Home.scss";  

// Définition composant Home
const Home = () => (
  <main className="home"> 
  {/* Élément principal de la page, avec la classe CSS "home" */}
    <Banner txt="Chez vous, partout et ailleurs" page="home" /> 
    {/* Affichage du composant Banner avec des propriétés "txt" et "page" */}
    <section className="home-container"> 
      {/* Section contenant les cartes des logements */}
      {/* Boucle pour afficher chaque élément du fichier HomeData, chaque élément est une carte avec un titre et une image */}
      {HomeData.map(({ id, title, cover }) => (
        <Card className="card" key={id} id={id} title={title} cover={cover} /> 
        // Pour chaque objet dans HomeData, un composant Card est créé avec les props id, title et cover
      ))}
    </section>
  </main>
);

export default Home; 
