import React from "react";
import { useParams } from "react-router-dom"; //récupérer les paramètres dynamiques d'une URL
import data from "../../Data/dataLogement.json";
import Carousel from "../../Components/Carousel/Carousel";
import Dropdown  from "../../Components/Dropdown/Dropdown";
import TagValue from "../../Components/TagValue/TagValue";
import Host from "../../Components/Host/Host";
import Stars from "../../Components/Stars/Stars";
import Error from "../Error/Error";
import "./Logement.scss";

// Composant pour afficher les informations principales du logement
const LogementInfo = ({ title, location, tags, host, rating }) => (
  <section className="info-logement-part-1 flex-between">
    <div>
      {/* Affichage du titre et de la localisation du logement */}
      <h1 className="logement-title">{title}</h1>
      <h2 className="logement-location">{location}</h2>
      {/* Liste des tags (caractéristiques du logement) */}
      <TagValue className="logement-tagValue" tags={tags} />
    </div>
    <div className="flex-reverse">
      {/* Informations sur l'hôte */}
      <Host
        className="logement-host"
        name={host.name}
        picture={host.picture}
      />
      {/* Affichage des étoiles de notation */}
      <Stars className="logement-rating" rating={rating} />
    </div>
  </section>
);

// Composant pour afficher les dropdowns (description et équipements)
const LogementDropdowns = ({ description, equipments }) => (
  <section className="info-logement-part-2 flex">
    {/* Dropdown pour la description du logement */}
    <Dropdown
      className="logement-dropdownDescription"
      title="Description"
      content={description}
      page="logement"
    />
    {/* Dropdown pour la liste des équipements */}
    <Dropdown
      className="logement-dropdownEquipements"
      title="Équipements"
      content={equipments}
      page="logement"
    />
  </section>
);

function Logement() {
  // Extraction du paramètre "id" depuis l'URL
  const { id } = useParams();
  // Recherche du logement correspondant dans les données
  const logement = data.find((item) => item.id === id);

  // Gestion de l'erreur si aucun logement n'est trouvé avec cet id
  if (!logement) return <Error />;

  // Déconstruction des données du logement pour un accès simplifié
  const {
    title,
    description,
    pictures,
    equipments,
    tags,
    location,
    host,
    rating,
  } = logement;

  return (
    <main className="logement">
      {/* Affichage du carousel avec les photos du logement */}
      <Carousel photos={pictures} />

      {/* Informations principales sur le logement */}
      <LogementInfo
        title={title}
        location={location}
        tags={tags}
        host={host}
        rating={rating}
      />

      {/* Section des dropdowns (description et équipements) */}
      <LogementDropdowns description={description} equipments={equipments} />
    </main>
  );
}

export default Logement;
