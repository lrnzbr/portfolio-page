import React from "react";
import Caption from "./Caption"

export default function VideoContainer({url, caption}) {
    return(
        <div>
        <iframe title = {caption} width="420" height="315"
            src={url}>
        </iframe>
        <Caption input = {caption}/> 
        </div>
    );
}