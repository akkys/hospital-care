import React from "react";
import img from "../img/doc.png";
import { Link } from "react-router-dom";

const Doctors = (props) => {
  const { docs } = props;
  console.log(props);
  return (
    <div className="col-md-4 mb-5 card-container">
      <div className="card border-primary text-dark bg-light mb-3 ">
        <img
          alt="img"
          src={img}
          style={{ height: "200px", width: "50%", marginLeft: "25%" }}
        />
        <div
          className="card-header"
          style={{ backgroundColor: "rgb(223, 219, 219)" }}
        >
          <h4>
            {docs.name}

            <Link to={"/editDoctor/" + docs._id}>
              <i className="fa fa-pencil-square-o float-right text-success" />
            </Link>
          </h4>
          <p>Experience : {docs.exp} Year(s)</p>
        </div>
        <div className="card-body">
          <h5 className="card-title">Specialist in : {docs.expert}</h5>
          <h6>Available at : {docs.available}</h6>
          <h6>
            Duty Timings: {docs.time}
            {""} Hrs.
          </h6>
          <h6>Contact : {docs.contact}</h6>
          <p className="card-text">About: {docs.desc}</p>
          <i
            onClick={() => props.deleteDocs(docs._id)}
            className="fa fa-trash fa-lg float-right text-danger"
          />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
