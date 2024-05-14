import React from "react";
import "../styles/Button.css";

interface ButtonProps {
  title: string;
  action: string;
}
export default function DefaultButton(buttonProps: ButtonProps) {
  return (
    <a className="Button" href={buttonProps.action}>
      <div>
        <p>{buttonProps.title}</p>
      </div>
    </a>
  );
}
