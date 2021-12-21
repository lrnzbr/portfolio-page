import React from "react";
import Header1 from "../StyleComponents/Header1";
import Header2 from "../StyleComponents/Header2";
import Button from "../StyleComponents/Button";

export default function HeroSection() {
    return(
        <div>
       <Header1 input = "Lorenzo B. Brown"/> 
       <Header2 input = "iOS Developer"/> 
       <Button text="A Bit about Me" action="#"/> 
       <Button text="Projects" action="#"/> 
       <Button text="Teaching" action="#"/> 
       <Button text="Download my Resumé" action="#"/> 
       <Button text="See my LinkedIn" action="#"/> 
       <Button text="Check Out my GitHub" action="#"/> 
       <Button text="Shoot me a Whatsapp" action="#"/> 
       </div>
    );
}