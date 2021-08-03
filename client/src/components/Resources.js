import React from "react";
import ResourceBox from "./ResourceBox";
import resourceimage1 from "../images/leetcode.png";
import resourceimage2 from "../images/codewars.svg";
import resourceimage3 from "../images/xiny.png";
import resourceimage4 from "../images/codelabs.png";
import resourceimage5 from "../images/mlh.jpeg";
import resourceimage6 from "../images/devpost.png";

import "../styles/_resources.scss";

function Resources() {
  return (
    <div id="features">
      <div style={{ marginBottom: 30 + "em" }}></div>
      <h1 class="top__title">Resources</h1>
      <br></br>
      <h1 class="heading__title">
        Study and practice coding for technical interviews.
      </h1>
      <br></br>
      <div className="a-container">
        <a href="https://leetcode.com/">
          <ResourceBox
            image={resourceimage1}
            title="Leetcode"
            text="Practice coding commonly asked questions during technical interviews."
          />
        </a>
        <a href="https://codewars.com/">
          <ResourceBox
            image={resourceimage2}
            title="Codewars"
            text="Answer coding questions regarding syntax, logic, and more."
          />
        </a>
        <a href="https://learnxinyminutes.com/">
          <ResourceBox
            image={resourceimage3}
            title="Learn X in Y Minutes"
            text="Study and review the documentation of many concepts and languages."
          />
        </a>
      </div>
      <div style={{ marginTop: 5 + "em" }}></div>
      <h1 class="heading__title">
        Learn and develop new skills by building projects.
      </h1>
      <div className="a-container">
        <a href="https://codelabs.developers.google.com/">
          <ResourceBox
            image={resourceimage4}
            title="Codelabs"
            text="From machine learning to virtual reality, Google offers projects and tutorials for everyone."
          />
        </a>
        <a href="https://mlh.io/">
          <ResourceBox
            image={resourceimage5}
            title="Major League Hacking"
            text="Attend hackathons where people collaborate to build projects and gain new skills."
          />
        </a>
        <a href="https://devpost.com/">
          <ResourceBox
            image={resourceimage6}
            title="Devpost"
            text="Take part in any competition or hackathon worldwide to develop both hard and soft skills."
          />
        </a>
      </div>
    </div>
  );
}

export default Resources;
