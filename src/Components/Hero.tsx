import React, { useEffect, useState } from "react";
//import { fetchHeroData } from "../Utilities/FirebaseFunctions";
import { HeroSectionInterface } from "../Model/HeroModel";
import "../styles/Hero.css";
import greeniPhone from "../assets/cropped-iphone.png";

export default function Hero() {
  // const [data, setData] = useState<HeroSectionInterface | undefined | null>(
  //   null,
  // );

  // useEffect(() => {
  //   async function fetchData() {
  //     //setIsLoading(true);
  //     try {
  //       const response = (await fetchHeroData()) as HeroSectionInterface;
  //       setData(response);
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //       //setIsLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <section className="hero-section">
      <div>
        <div>
          <h1 className="hero-title">Lorenzo Brown</h1>
          <h2 className="hero-subtitle">iOS Developer</h2>
        </div>
        <img className="green-iphone" src={greeniPhone} alt="green iPhone" />
        <a href="#nav" className="cta-button">
          View Portfolio
        </a>
      </div>
    </section>
  );
}
