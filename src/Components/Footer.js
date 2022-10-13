import React from "react";
import { FaTree, FaTelegramPlane, FaMailBulk } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";

function Footer() {
  const style = { color: "green", fontSize: "1.5rem" };
  const icons = { color: "grey", marginTop: "0.5em" };
  return (
    <footer>
      <article className="footer">
        <main className="left--footer">
          <div>
            <div className="footer--logo">
              <FaTree style={style} />
              <h3>Ray Landscaping</h3>
            </div>
            <p>
              We're proud of our contribution towards building the
              future,grounds up! Our landscaping conpany is ready to complete
              any kind of project for any type of commercial and residential
              client{" "}
            </p>
          </div>
        </main>

        <main className="right--footer">
          <div>
            <div className="footer--contact">
              <h4>Contact Us</h4>
              <div className="contact">
                <FaTelegramPlane style={icons} />
                <p>Yarmouth MA 02673</p>
              </div>
              <div className="contact">
                <FaMailBulk style={icons} />
                <p>Contact@ray.com</p>
              </div>
              <div className="contact">
                <BsTelephoneFill style={icons} />
                <p>(0-01)810-054-899</p>
              </div>
            </div>
          </div>
          <div className="media">
            <h4>Social Media</h4>
            <p>Facebook</p>
          </div>
          <div className="working--hours">
            <h4>Working hours</h4>
            <p>Mon-Sat</p>
            <p>Working Hours &:00 AM - 6:00</p>
          </div>
        </main>
      </article>
      <p className="p">
        @ 2022 Ray's Landscaping All rights reserved.Privacy Policy - Cookies
        Policy
      </p>
    </footer>
  );
}

export default Footer;
