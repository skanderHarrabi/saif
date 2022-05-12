/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import saif from "../icons/saif.png";

const Header = () => {
  return (
    <div>
      <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
          <img className="masthead-avatar mb-5" src={saif} alt="" />

          <h1 className="masthead-heading text-uppercase mb-0">
            Khlif Saif eddin
          </h1>

          <div className="divider-custom divider-light">
            <div
              className="
divider-custom-line"
            ></div>
            <div className="divider-custom-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>

          <p className="masthead-subheading font-weight-light mb-0">
            Software Engineer , FullStack Developer
          </p>
          <div className="col-lg-4 mb-5 mb-lg-0" style={{ marginTop: "20px" }}>
            <a
              className="btn btn-outline-light btn-social mx-1"
              onClick={() => {
                window.open("https://www.facebook.com/saif.khlif.7", "_blank");
              }}
            >
              <i className="fab fa-fw fa-facebook-f" />
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              onClick={() => {
                window.open("https://github.com/KhlifSeifEddinne", "_blank");
              }}
            >
              <i className="fab fa-fw fa-github" />
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/saif-eddin-khlif-sdk/",
                  "_blank"
                );
              }}
            >
              <i className="fab fa-fw fa-linkedin-in" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
