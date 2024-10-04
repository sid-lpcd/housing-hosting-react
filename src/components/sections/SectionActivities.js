import React from "react";
import ActivityCard from "../general/ActivityCard";

function SectionActivities() {
  return (
    <div className="row justify-content-evenly">
      <h2>Want more?</h2>
      <p>
        We aim to get you the perfect stay, so we try to organize some fun
        activities.
      </p>
      <ActivityCard
        imgSrc="assets/Solo.png"
        title="Solo Activities"
        activities={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
      />
      <ActivityCard
        imgSrc="assets/Couple.png"
        title="Couple Activities"
        activities={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
      />
      <ActivityCard
        imgSrc="assets/Friends.png"
        title="Friends Activities"
        activities={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
      />
      <ActivityCard
        imgSrc="assets/Family.png"
        title="Family Activities"
        activities={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
      />
      <ActivityCard
        imgSrc="assets/Kids.png"
        title="Kids Activities"
        activities={["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"]}
      />
    </div>
  );
}

export default SectionActivities;
