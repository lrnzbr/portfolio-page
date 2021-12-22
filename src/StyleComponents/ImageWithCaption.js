import React from "react";
import "./styledComponents.css"

import Caption from "./Caption"

export default function ImageWithCaption({image, caption, altText}) {
    return(
        <div class="ImageWithCaption">
        <img src = {image} alt = {altText}/>
        <Caption input = {caption}/>
        </div>
    );
}