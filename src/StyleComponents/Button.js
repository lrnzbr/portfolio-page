import React from "react";
import "./styledComponents.css"

export default function Button({text, action}) {
    return(
        
        <a class="Button" href={action}>
            <div >
                <p>{text}</p>
            </div>
        </a>
    );
}