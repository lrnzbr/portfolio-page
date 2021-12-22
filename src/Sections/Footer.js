import React from "react";
import "./sections.css"
import Caption from "../StyleComponents/Caption";


export default function Footer() {
    return(
        <div class="Footer">
        <Caption input = "This page was created using React.js."/>
        <a href="https://github.com/lrnzbr/portfolio-page">Check out the code repo</a>
        </div>
    );
}