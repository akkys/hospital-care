import React from "react";

const Wards = (props) => {
  const { ward } = props;
  console.log(ward);
  return (
    <div className="col-md-6 mb-3 mt-3 card-container">
      <div
        className="card border-primary text-dark bg-light mb-3 "
        style={{ height: "280px" }}
      >
        <div
          className="card-header"
          style={{ backgroundColor: "rgb(223, 219, 219)" }}
        >
          <h4>
            {ward.roomType}
            <h5 className="float-right">{ward.price}/- per Day</h5>
          </h4>
        </div>
        <div className="card-body">
          <h5 className="text-secondary">
            <h4>Description :</h4> {ward.desc}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Wards;
