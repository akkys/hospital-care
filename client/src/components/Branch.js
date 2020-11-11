import React from "react";

const Branch = (props) => {
  const { branch } = props;
  console.log(branch);
  return (
    <div className="col-md-4 mb-3 mt-3 card-container">
      <div
        className="card border-primary text-dark bg-light mb-3 "
        style={{ height: "280px" }}
      >
        <div className="card-body mt-3">
          <div className="row m-auto">
            <div className="col-md-1 ml-auto">
              <h6>
                <i className="fa fa-map-marker fa-lg" />
              </h6>
            </div>
            <div className="col-md-10">
              <h5>{branch.address}</h5>
            </div>
          </div>
          <div className="row m-auto">
            <div className="col-md-1 ml-auto">
              <h6>
                <i className="fa fa-envelope fa-lg" />
              </h6>
            </div>
            <div className="col-md-10">
              <h5>{branch.email}</h5>
            </div>
          </div>
          <div className="row m-auto">
            <div className="col-md-1 ml-auto">
              <h6>
                <i className="fa fa-phone-square fa-lg" />
              </h6>
            </div>
            <div className="col-md-10">
              <h5>{branch.contact}</h5>
            </div>
          </div>
          <div className="row m-auto">
            <div className="col-md-1 ml-auto">
              <h6>
                <i className="fa fa-users fa-lg" />
              </h6>
            </div>
            <div className="col-md-10">
              <h5>Help Line : {branch.helpLine}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branch;
