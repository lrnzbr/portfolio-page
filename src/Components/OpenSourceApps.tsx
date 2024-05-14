import react from "react";
import "../styles/Portfolio.css";
import { openSourceApps } from "../Model/OpenSourceApps";

export default function OpenSourceSection() {
  return (
    <section>
      <h1>Open Source Apps</h1>
      <div className="scroll-container">
        {openSourceApps.map((app) => (
          <div className="scroll-item">
            <img
              className="portfolio-image"
              src={app.coverImage}
              alt={app.title}
            />
            <h2>{app.title}</h2>
            <p>{app.description}</p>
            <a href={app.repoURL} target="_blank" rel="noreferrer">
              View Code
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
