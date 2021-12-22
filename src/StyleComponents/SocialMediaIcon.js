import React from "react";
import "./styledComponents.css"

export default function SocialMediaIcon({type, link}) {
    return(
        <a href={link}><img src =`./assets/${type}.png` /> </a>
    );
}