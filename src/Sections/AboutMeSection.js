import React from "react";
import Header1 from "../StyleComponents/Header1";
import Header2 from "../StyleComponents/Header2";
import ParagraphText from "../StyleComponents/ParagraphText";

export default function AboutMeSection() {
    return(
       <div>
           <Header1 input = "A Bit about Me"/>
           <ParagraphText input = "¡Hola! My name is Lorenzo and I'm a software engineer who really likes building iOS apps. I also have experience in web development, cross-platform apps, cloud infrastructures and machine learning applications. I'm passionate about education and making technology more accessible to the world. My background is pretty eclectic, and I love taking on new challenges and jumping out of my comfort zone. This is a page of my work, passions and experiments. Feel free to get in touch if you ever want to work on something together!"/> 
           <Header2 input = "Fun Facts"/>
           <ParagraphText input = "Hometown: Dallas, Texas"/>
           <ParagraphText input = "Favorite Food: Chicken Tikka Masala"/>
           <ParagraphText input = "Countries Visited: 11 (and counting)"/>
           <ParagraphText input= "Number of Siblings: 10 (and hopefully not counting)"/>
           <ParagraphText input = "Superpower: Making people laugh...at me...unintentionally"/> 
       </div>
    );
}