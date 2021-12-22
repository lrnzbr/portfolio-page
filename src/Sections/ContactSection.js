import React from "react";
import "./sections.css"
import Header1 from "../StyleComponents/Header1";
import Header2 from "../StyleComponents/Header2";
import Button from "../StyleComponents/Button";
import ParagraphText from "../StyleComponents/ParagraphText";

export default function ContactSection() {
    return(
        <div class="ContactSection">
        <Header1 input="Want to get in touch?"/>
        <Header2 input="Feel free to reach out on your commmunication platform of choice:"/>
        <Button text="LinkedIn" action="https://linkedin.com/in/lorenzobrown"/>
        <Button text="Whatsapp" action = "https://wa.me/525524161721"/>
        <Button text="Email" action="mailto:lrnzbr@gmail.com"/> 
        </div>
    );
}