import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div class="grid-container">
        <div class="item1">
          <h3 className="footer-header"> Our Address </h3>
          <p className="paragraph-footer">
            {" "}
            Address 908 Amman-Jordan <br />
            street #100, Capital 20037, Jordan
          </p>{" "}
          <div className="footerIcons">
            <a href="https://linkedin.com/">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div class="item2"></div>
        <div class="item3">
          <h3 className="footer-header"> Working Hours</h3>
          <p className="paragraph-footer">
            Monday-Friday: 09AM – 10PM <br />
            Saturday: 10AM – 07PM <br />
            Sunday: 10AM – 03PM
          </p>
        </div>
        <div class="item4">
          <h3 className="contatUsTitle">Contact US</h3>

          <p className="paragraph-footer">
            <i className="fas fa-phone-alt"></i> +962777777777 <br />
            <i className="fas fa-envelope"></i> saloon@gmail.com
          </p>
        </div>
        <div className="item5">
          <p>
            {" "}
            <span className="span-footer">Copyright </span>©2021 All rights
            reserved{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
