import react from "react";
import AppStoreApps from "./AppStoreApps";
import OpenSourceSection from "./OpenSourceApps";
import "../styles/Portfolio.css";

export default function PortfolioSection() {
  return (
    <section>
      <a href="#nav">
        <h2 className="portfolio-title">My Portfolio</h2>
      </a>

      <div className="expandable" id="nav">
        <p>
          I have developed a number of applications for the App Store and have
          also contributed to a number of open source projects. Below is some of
          my featured work.
        </p>
        <AppStoreApps />
        <OpenSourceSection />
      </div>
    </section>
  );
}
