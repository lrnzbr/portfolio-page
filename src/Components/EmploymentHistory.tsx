import react from "react";
import { workHistory, WorkHistoryModel } from "../Model/WorkHistoryModel";
import "../styles/EmploymentHistory.css";
import iphone from "../assets/green-iphone.png";

export default function EmploymentSection() {
  return (
    <section className="employmentHistorySection">
      <a href="#nav2">
        <h2 className="employmentHistoryTitle">Work History</h2>
      </a>
      <div className="expandable" id="nav2">
        {workHistory.map((workHistoryItem) => (
          <EmploymentHistoryItem {...workHistoryItem} />
        ))}
      </div>
    </section>
  );
}
function EmploymentHistoryItem(workHistoryItem: WorkHistoryModel) {
  const timelineString = workHistoryItem.startDate
    .toLocaleString("default", { month: "long" })
    .concat(" ")
    .concat(
      workHistoryItem.startDate.toLocaleString("default", { year: "numeric" }),
    )
    .concat(" - ")
    .concat(
      workHistoryItem.endDate.toLocaleString("default", { month: "long" }),
    )
    .concat(" ")
    .concat(
      workHistoryItem.endDate.toLocaleString("default", { year: "numeric" }),
    );
  return (
    <div className="employmentHistoryItemContainer">
      <div className="titleContainer">
        <p>{workHistoryItem.company}</p>
      </div>
      <div className="bodyContainer">
        <div className="imageContainer">
          <div className="employmentImageContainer">
            <img
              className="employmentImage"
              src={workHistoryItem.coverImage}
              alt="employer logo"
            />
          </div>
        </div>
        <div className="employmentTextContainer">
          <p>{timelineString}</p>
          <div className="bulletpointsContainer">
            <ul>
              {workHistoryItem.bulletPoints.map((responsibility) => (
                <li>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div className="tagSection">
            <div>
              {workHistoryItem.tags.map((tag) => (
                <span className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
