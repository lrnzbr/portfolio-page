import React from "react";
import "./styledComponents.css"


export default function HeroHeader({input}) {
    return(
        <h1 class = 'HeroHeader'>{input}</h1>
    );
}