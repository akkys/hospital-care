import React from "react";

const ContactUs = () => {
  return (
    <div className="container appt-container mb-5">
      <h2>Contact Us</h2>
      <div className="row col-md-6">
        <div className="col-md-1">
          <h6>
            <i className="fa fa-map-marker fa-lg" />
          </h6>
        </div>
        <div className="col-md-11">
          <h5>
            #152, 2nd Cross, 3rd Main,
            <br /> Rajajinagar, Bangalore - 560098
          </h5>
        </div>
      </div>
      <div className="row col-md-6 ">
        <div className="col-md-1">
          <h6>
            <i className="fa fa-envelope fa-lg" />
          </h6>
        </div>
        <div className="col-md-11">
          <h5>deanoffice@askh.ac.in</h5>
        </div>
      </div>
      <div className="row col-md-6 ">
        <div className="col-md-1">
          <h6>
            <i className="fa fa-phone-square fa-lg" />
          </h6>
        </div>
        <div className="col-md-11">
          <h5>080 85647854</h5>
        </div>
      </div>
      <div className="row col-md-6">
        <div className="col-md-1">
          <h6>
            <i className="fa fa-users fa-lg" />
          </h6>
        </div>
        <div className="col-md-11">
          <h5>080 85798475</h5>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
