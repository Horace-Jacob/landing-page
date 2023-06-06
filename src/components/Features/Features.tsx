import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { featureData } from "../../utils/data";

export const Features = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="feature-heading">
              <span className="d-inline-block rounded-pill shadow-sm fw-5 px-4 py-2 mb-3">
                <span className="text-primary">Premium </span>
                Features
              </span>
              <h2 className="display-5 fw-bolder mb-5">
                <span className="text-gradient">Express Functionality</span>
              </h2>
              <p className="d-sm-none d-md-block d-none mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                deleniti asperiores sit.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {featureData.map((value, key) => (
            <div className="col-12 col-md-6 col-lg-4 my-3" key={key}>
              <div className="card text-center card-box">
                <div className="card-body">
                  <div className="m-3">
                    <FontAwesomeIcon
                      icon={value.icon}
                      style={{ color: value.color }}
                      className="custom-icon"
                    />
                  </div>
                  <h4 className="card-title mb-2 text-gradient d-inline fw-bolder">
                    {value.title}
                  </h4>
                  <p className="card-text text-muted m-3">{value.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
