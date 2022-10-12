import React from "react";
import { FaPaintBrush, FaPeopleCarry } from "react-icons/fa";
import { ImFolderOpen } from "react-icons/im";

function Design() {
  const brushStyle = {
    backgroundColor: "#FFF3D1",
    color: "#F1C232",
    height: "20px",
    width: "20px",
    borderRadius: "100%",
    padding: "20px",
    marginBottom: "1em",
  };
  const install = {
    backgroundColor: "#CFE2F3",
    color: "#2986CC",
    height: "20px",
    width: "20px",
    borderRadius: "100%",
    padding: "20px",
    marginBottom: "1em",
  };
  const files = {
    backgroundColor: "#D9D2E9",
    color: "#8E7CC3",
    height: "20px",
    width: "20px",
    borderRadius: "100%",
    padding: "20px",
    marginBottom: "1em",
  };
  return (
    <article className="work--section">
      <h2>Why work with us?</h2>
      <section className="works">
        <main className="main--cards">
          <div className="work--card">
            <FaPaintBrush style={brushStyle} />
            <h3>Creative Design</h3>
            <p>
              Our expert craftsman can transform your outdoor space into a 'wow'
              space,We hav the experince and know-how to desgin and build the
              perfect outdoor landscape.
            </p>
          </div>
          <div className="work--card">
            <FaPeopleCarry style={install} />
            <h3>Thoughtful Installation</h3>
            <p>
              Our expert craftsman can transform your outdoor space into a 'wow'
              space,We hav the experince and know-how to desgin and build the
              perfect outdoor landscape.
            </p>
          </div>
          <div className="work--card">
            <ImFolderOpen style={files} />
            <h3>Beautiful Landscapes</h3>
            <p>
              Our expert craftsman can transform your outdoor space into a 'wow'
              space,We hav the experince and know-how to desgin and build the
              perfect outdoor landscape.
            </p>
          </div>
        </main>

        <aside>
          <p>
            We serve both commercial and residential customers .annd are a full
            service design. installation and landscape maintenance company
          </p>
          <ul>
            <li>Mulching/bed maintaince</li>
            <li>Brush Cleaning/removal</li>
            <li>Hardscraping</li>
            <li>Landscaping Design And Installation</li>
            <li>General Cleanup</li>
            <li>Planting</li>
            <li>Weed Wacking</li>
          </ul>
        </aside>
      </section>

      <div className="get-started">
        <h1>Let's get Started.</h1>
        <p>
          Get a quote from the service that you want and you can expect to
          receive a response within 1-2 Business Days
        </p>
        <button className="btn btn-start">Get a Quote</button>
        <img
          src="https://i.pinimg.com/originals/a6/9a/19/a69a19c2c8909b2231f6d7c3fa955257.png"
          alt=""
        />
      </div>
    </article>
  );
}

export default Design;
