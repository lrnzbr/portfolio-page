import react from "react";
import "../styles/Portfolio.css";
import { appStoreApps } from "../Model/AppStoreModel";
import appStoreIcon from "../assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
export default function AppStoreApps() {
  return (
    <div>
      <h3>App Store Apps</h3>
      <div className="scroll-container">
        {appStoreApps.map((app, i) => {
          return (
            <div className="scroll-item">
              <img src={app.coverImage} alt={app.title} />
              <div>
                <h4>{app.title}</h4>
                <p>{app.description}</p>
                <a href={app.appStoreURL}>
                  <img
                    className="AppImage"
                    src={appStoreIcon}
                    alt="Download on the App Store"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
