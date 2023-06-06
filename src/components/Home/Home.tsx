import React from "react";
import "./Home.css";
import { ReactComponent as LandingSvg } from "../../images/landing.svg";
import { ReactComponent as Wave1 } from "../../images/Wave1.svg";

export const Home = () => {
  return (
    <section className="pt-3 overflow-hidden primary-bg">
      <div className="container position-relative">
        <div className="row gx-5 align-items-center">
          <div className="col-12 col-md-6 col-lg-7">
            <div className="text-start">
              <h1 className="display-3 fw-bolder mb-5">
                <span className="text-gradient text-white d-inline">
                  Stay connected with your customers
                </span>
              </h1>
              <p className="text-white my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Impedit nihil tenetur minus quidem est deserunt molestias
                accusamus harum ullam tempore debitis et, expedita, repellat
                delectus aspernatur neque itaque qui quod.
              </p>
              <div className="d-grid gap-3 d-flex justify-content-start mb-3">
                <a
                  className="btn btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder text-uppercase landing-btn"
                  href="/"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-5 d-sm-none d-md-block d-none">
            <div className="bg-white text-center rounded p-4 p-sm-5 mt-5 mt-lg-0 shadow-lg">
              <LandingSvg />
            </div>
          </div>
        </div>
      </div>
      <div className="shape-bottom">
        <Wave1 />
      </div>
    </section>
  );
};
