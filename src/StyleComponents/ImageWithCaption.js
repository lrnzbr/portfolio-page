import React from "react";
import Caption from "./Caption"

export default function ImageWithCaption({image, caption, altText}) {
    return(
        <div>
        <img src = {image} alt = {altText}/>
        <p>{caption}</p>
        </div>
    );
}