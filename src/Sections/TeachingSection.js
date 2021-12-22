import React from "react";
import Header1 from "../StyleComponents/Header1";
import ParagraphText from "../StyleComponents/ParagraphText";
import VideoContainer from "../StyleComponents/VideoContainer";
import ImageWithCaption from "../StyleComponents/ImageWithCaption"
import teachingImage from '../assets/teachingInGaza.png';
import './sections.css';

export default function TeachingSection() {
    return(
        <div class="Section" id="Teaching">
        <Header1 input = "Teaching and Content Creation"/>
        <ParagraphText input = "Throughout my college years and into my professional career, teaching has been an integral part of my personal development. Teaching requires constant re-evaluation of perspective and experiments with implementations of creativity in hopes to promote collaboration and open communication. Below are a few highlights of my favorite teaching opportunities."/>
        <VideoContainer url = "https://youtube.com/embed/wUgLpEkZ5fk?autoplay=1&mute=1" caption = "A little highlight reel I made in 2017 showcasing my work with Udacity and volunteering with the MEET Program in Jerusalem "></VideoContainer>
        <VideoContainer url = "https://youtube.com/embed/feKv4wheDeU?autoplay=1&mute=1" caption = "A skit on teaching iterative development in our Fullstack Foundations Class"/> 
        <ImageWithCaption image = {teachingImage} caption = "Teaching an introductory Java Crashcourse in Khan Younis, Gaza Strip " altText = "Lorenzo giving a presentation in front of a whiteboard"/>
        <VideoContainer url = "https://youtube.com/embed/Dx9ueYFLdJc?autoplay=1&mute=1" caption = "Giving an iOS push notifications tutorial with Firebase at a MeetUp in Mexico City (in Spanish)"/> 
        </div>
    );
}