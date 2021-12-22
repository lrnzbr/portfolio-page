import React from "react";
import Caption from "./Caption"
import "./styledComponents.css"


export default function VideoContainer({url, caption}) {
    return(
        <div class="VideoContainer">
        <iframe title = {caption} width="420" height="315"
            src={url}>
        </iframe>
        <Caption input = {caption}/> 
        </div>
    );
}