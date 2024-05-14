import react from "react";
import DefaultButton from "./Button";
import "../styles/Contact.css";
export default function ContactSection() {
  return (
    <div>
      <a href="#nav3">
        <h2 className="ContactTitle">Links</h2>
      </a>
      <div className="expandable" id="nav3">
        <p>
          If you have any questions or would like to get in touch, please feel
          free to contact me via LinkedIn or GitHub.
        </p>
        <DefaultButton
          {...{
            title: "LinkedIn",
            action: "https://www.linkedin.com/in/lorenzobrown",
          }}
        />
        <DefaultButton
          {...{
            title: "Github",
            action: "https://www.github.com/lrnzbr",
          }}
        />

        <DefaultButton
          {...{
            title: "My App Store Apps",
            action:
              "https://apps.apple.com/us/developer/lorenzo-brown/id1496868083",
          }}
        />

        <DefaultButton
          {...{
            title: "My YouTube Channel",
            action: "https://www.youtube.com/channel/UCg8kOaVBColLUp9watXYL3g",
          }}
        />

        <DefaultButton
          {...{
            title: "Email Me",
            action: "mailto:lorenzo@vydr.io",
          }}
        />
      </div>
    </div>
  );
}
