import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";

function HomePage() {
  return (
    <>
      <main className="homepage-gallery">
      <div className="homepage">
  <img src="/Images/רקע.jpg" alt="Background" className="homepage-image" />
</div>
      </main>
      <footer className="homepage-footer">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube />
        </a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </footer>
    </>
  );
}

export default HomePage;