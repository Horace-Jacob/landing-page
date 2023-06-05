import React from "react";
import "./Home.css";
import { ReactComponent as LandingSvg } from "../../images/landing.svg";

export const Home = () => {
  return (
    <section
      className="section welcome-area bg-overlay d-flex align-items-center"
      style={{ backgroundColor: "#542FD8" }}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-7">
            <div className="welcome-intro">
              <h1
                className="text-white font-weight-bold"
                style={{ fontSize: "70px" }}
              >
                Stay connected with your customers
              </h1>
              <p className="text-white my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit nihil tenetur minus quidem est deserunt molestias
                accusamus harum ullam tempore debitis et, expedita, repellat
                delectus aspernatur neque itaque qui quod.
              </p>
              <div className="button-group store-buttons d-flex">
                <a href="/" className="btn btn-lg text-uppercase landing-btn">
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-5">
            <div className="bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
              <LandingSvg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
