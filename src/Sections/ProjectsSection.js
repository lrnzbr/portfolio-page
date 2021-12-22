import React from "react";
import Header1 from "../StyleComponents/Header1";
import Header2 from "../StyleComponents/Header2";
import ParagraphText from "../StyleComponents/ParagraphText";
import VideoContainer from "../StyleComponents/VideoContainer";
import "./sections.css"

export default function ProjectsSection() {
    return(
        <div class="Section" id="Projects">
        <Header1 input = "Fun Projects"/>
        <ACapellaApp/>
        <PointOfSalesApp/>
       
        </div>
    );
}

function ACapellaApp(){
    return(
        <div>
             <Header2 input = "A.Cappella Tuning Tutor"/>
             <ParagraphText input = "I really like music...like legit high school band-nerd here. So I thought about creating apps that helps young musicians practice and perform by harnessing the power of machine learning. I started out by creating an app in python that can be trained upon multiple versions of a specific song. Feeding snippets of a song as frequency fingerprints into an ML algorithm, my hope is to create an app that can predict where a musician is in a song and play along with them. Then I started creating a basic tuner App in iOS. My aim is to bring these two projects together to create a tuner and tutor to train musicians to comfortably use the full range of their instruments and get the full band experience even while practicing alone."/>
             <VideoContainer url = "https://youtube.com/embed/68VAeFjwb6E?autoplay=1&mute=1" caption="Python Machine Learning Algorithm for song placement. "/> 
             <VideoContainer url ="https://youtube.com/embed/_ofwrL6ytOA?autoplay=1&mute=1" caption = "Basic Tuner app for iOS"/>
        </div>

    );
}

function PointOfSalesApp(){
    return(
        <div>
        <Header2 input = "Blockchain iOS Point of Sale App"/>
        <ParagraphText input = "In a previous job, I worked on building an entire iOS app from the ground up.  This app communicated with a blockchain backend to mint and raze a stable cryptocurrency using IBM Hyperledger Fabric.  To respect company privacy I'll only share prototypes of the project that didn't make it to production, but this was a really cool app that I really enjoyed building."/>
        <VideoContainer url = "https://youtube.com/embed/BWL1DeQlxaQ?autoplay=1&mute=1" caption="Demo version of the app that calculates a total and after a successful card transaction, mints tokens on a blockchain"/> 
        <ParagraphText input = "To store transaction data that wasn't on the blockchain, We were debating between using AWS AppSync or Google Firebase.  Data needed to be synced across several Point of Sale devices to keep track of inventory and sales.  We ultimately decided to use Firebase but I build out this toy app just to show it could be done."/>
        <VideoContainer url ="https://youtube.com/embed/BAkxWypRUlE?autoplay=1&mute=1" caption = "Playing with AWS AppSync to syncronize inventory changes from different points of sale"/>
   </div>

    );
}