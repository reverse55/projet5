import React, { useState } from "react";
import "./Carousel.scss";

const Carousel = ({ photos }) => {
  // Déclaration de l'état pour l'index de la photo courante
  const [index, setIndex] = useState(0);

  // Fonction pour passer à la photo suivante
  const nextSlide = () => {
    // Si on est à la dernière photo, on revient à la première
    if (index < photos.length - 1) {
      setIndex(index + 1); // On avance à l'image suivante
    } else {
      setIndex(0); // On revient à la première image
    }
  };

  // Fonction pour revenir à la photo précédente
  const prevSlide = () => {
    // Si on est à la première photo, on revient à la dernière
    if (index > 0) {
      setIndex(index - 1); // On revient à l'image précédente
    } else {
      setIndex(photos.length - 1); // On va à la dernière image
    }
  };

  return (
    <section className="carousel">
      {/* Affichage de l'image courante en fonction de l'index */}
      <img
        className="carousel-img"
        src={photos[index]}
        alt={`Photo ${index + 1}`}
      />
      {/* Si le nombre de photos est supérieur à 1, on affiche les boutons de navigation */}
      {photos.length > 1 && (
        <>
          <button
            className="carousel-button carousel-button--prev"
            onClick={prevSlide} // Appel de la fonction pour la photo précédente
          >
            <img src="/Arrow-left.png" alt="Précédente" />
          </button>
          <button
            className="carousel-button carousel-button--next"
            onClick={nextSlide} // Appel de la fonction pour la photo suivante
          >
            <img src="/Arrow-right.png" alt="Suivante" />
          </button>
          <p className="carousel-counter">
            {/* Affichage de l'index actuel et du nombre total de photos */}
            {index + 1} / {photos.length}
          </p>
        </>
      )}
    </section>
  );
};

export default Carousel;
