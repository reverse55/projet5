import React from "react";
import "./TagValue.scss";

// Composant TagValue qui prend une liste de "tags" en tant que props
const TagValue = ({ tags }) => {
  return (
    <div className="tagValue">
      {/* Liste des tags */}
      <ul className="tagValue-container">
        {/* On mappe les tags pour les afficher dans des éléments <li> */}
        {tags.map((tag, index) => (
          <li className="tag" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagValue;
