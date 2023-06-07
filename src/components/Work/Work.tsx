import React from "react";
import "./Work.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowUp,
  faAngleRight,
  faUsersLine,
  faClone,
} from "@fortawesome/free-solid-svg-icons";

export const Work = () => {
  return (
    <section className="primary-bg overflow-hidden ptb_100 mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="text-center">
              <h2 className="display-5 fw-bolder mb-5 text-white">
                <span className="text-gradient">How sApp Works?</span>
              </h2>
              <p className="d-none d-sm-block text-white my-3 mt-sm-4 mb-sm-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center align-items-center col-12 col-md-4 single-work">
            <div className="text-center ">
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                style={{ color: "white" }}
                className="custom-icon"
              />
              <div className="mt-4">
                <h4 className="text-white text-gradient d-inline fw-bolder">
                  Install the App
                </h4>
              </div>
              <p className="mt-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                saepe, voluptates quis enim incidunt obcaecati?
              </p>
            </div>
            <span className="mx-1 d-sm-none d-md-block d-none">
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: "white" }}
                className="arrow-icon"
              />
            </span>
          </div>
          <div className="d-flex justify-content-center align-items-center col-12 col-md-4 single-work">
            <div className="text-center">
              <FontAwesomeIcon
                icon={faUsersLine}
                style={{ color: "white" }}
                className="custom-icon"
              />
              <div className="mt-4">
                <h4 className="text-white text-gradient d-inline fw-bolder">
                  Customers
                </h4>
              </div>
              <p className="mt-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                saepe, voluptates quis enim incidunt obcaecati?
              </p>
            </div>
            <span className="mx-1 d-sm-none d-md-block d-none">
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{ color: "white" }}
                className="arrow-icon"
              />
            </span>
          </div>
          <div className="d-flex justify-content-center align-items-center col-12 col-md-4">
            <div className="text-center">
              <FontAwesomeIcon
                icon={faClone}
                style={{ color: "white" }}
                className="custom-icon"
              />
              <div className="mt-4">
                <h4 className="text-white text-gradient d-inline fw-bolder">
                  Copy Click
                </h4>
              </div>
              <p className="mt-4 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                saepe, voluptates quis enim incidunt obcaecati?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
