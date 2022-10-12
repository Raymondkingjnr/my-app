import React from "react";
import { FaTools, FaBriefcase } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";

function Skills() {
  const style = {
    backgroundColor: "#99CC99",
    color: "#329932",
    width: "30px",
    height: "30px",
    borderRadius: "100%",
    padding: "15px",
    marginBottom: "0.5rem",
    marginTop: "0.2rem",
  };
  return (
    <div className="skills--section">
      <h2>What we Specialize in.</h2>
      <main className="skills--card">
        <div className="card">
          <FaTools style={style} />
          <h4>
            Tradition.Innovation. <br /> Performance
          </h4>
          <p>Quaility you deserve and dependability you can count on</p>
        </div>
        <div className="card">
          <FaBriefcase style={style} />
          <h4>
            Experience and <br /> Reputation
          </h4>
          <p>It's the proof we are the best for your project needs</p>
        </div>
        <div className="card">
          <BiDollar style={style} />
          <h4>
            Full service and <br /> Affordable Price
          </h4>
          <p>Quaility you deserve and dependability you can count on</p>
        </div>
      </main>
    </div>
  );
}

export default Skills;
