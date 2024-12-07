import React from "react";
import "./Footer.scss";  // Import du fichier de style pour le Footer

// Composant Footer qui affiche le logo et le texte de copyright
function Footer() {
  return (
    <footer className="footer">
      {/* Logo de l'entreprise */}
      <img className="footer-logo" src="/LOGO.png" alt="Logo" />
      
      {/* Texte de copyright */}
      <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
