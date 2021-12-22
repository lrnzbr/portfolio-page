import React from "react";
import HeroHeader from "../StyleComponents/HeroHeader";
import Header1 from "../StyleComponents/Header1";
import Header2 from "../StyleComponents/Header2";
import Button from "../StyleComponents/Button";
import "./sections.css"

export default function HeroSection() {
    return(
        <div class="Section">
       <HeroHeader input = "Lorenzo B. Brown"/> 
       <Header2 input = "iOS Developer 📱"/> 
       <ul>
       <li><Button text="A Bit about Me" action="#About"/> </li>
       <li><Button text="Projects" action="#Projects"/> </li>
       <li><Button text="Teaching" action="#Teaching"/> </li>
       <li><Button text="Download my Resumé" action="#"/> </li>
       <li><Button text="See my LinkedIn" action="https://www.linkedin.com/in/lorenzobrown"/> </li>
       <li><Button text="Check Out my GitHub" action="https://www.github.com/lrnzbr"/> </li>
       <li><Button text="Shoot me a Whatsapp" action="https://wa.me/525524161721"/> </li>
       </ul>
       </div>
    );
}