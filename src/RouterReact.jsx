
import React from "react";
import { Routes, Route } from "react-router-dom";  // Import des composants pour gérer la navigation
import Home from "./Pages/Home/Home.jsx";  // Import de la page d'accueil
import About from "./Pages/About/About.jsx";  // Import de la page "About"
import Error from "./Pages/Error/Error";  // Import de la page d'erreur
import Logement from "./Pages/Logement/Logement.jsx";  // Import de la page Logement

// Composant RouterComponent qui définit les différentes routes de l'application
const RouterComponent = () => (
  <Routes>
    {/* Route pour la page d'accueil */}
    <Route path="/" element={<Home />} />
    
    {/* Route pour la page "About" */}
    <Route path="/about" element={<About />} />
    
    {/* Route pour la page Logement, avec un paramètre dynamique :id */}
    <Route path="/logement/:id" element={<Logement />} />
    
    {/* Route de secours qui affiche la page d'erreur si aucune des routes ci-dessus ne correspond */}
    <Route path="*" element={<Error />} />
  </Routes>
);

export default RouterComponent;
