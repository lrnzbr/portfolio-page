import React from "react";

export default function Button({text, action}) {
    return(
        <a href={action}>{text}</a>
    );
}