import react from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <section className="footerContainer">
      <p className="footerText">
        I built this site using React.js & TypeScript <br />
        <a href="https://github.com/lrnzbr/portfolio-page">
          View Source Code on GitHub
        </a>
      </p>
    </section>
  );
}
