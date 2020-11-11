import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import IsLoading from "./IsLoading";
import Wards from "./Wards";

class WardsList extends Component {
  state = {
    wards: [],
    isLoading: false,
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/addWard/")
      .then((res) => {
        this.setState({
          wards: res.data,
          isLoading: true,
        });
        console.log(this.state.wards);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { wards, isLoading } = this.state;

    const wardsList = wards.map((ward, i) => {
      return <Wards key={i} ward={ward} />;
    });

    if (!isLoading) {
      return <IsLoading />;
    }
    return (
      <div className="container appt-container">
        <div className="row">
          <div className="col-md-10">
            <h2>Types of Wards available in our Hospital</h2>
          </div>

          <div className="col-md-2">
            <Link to="/" className="btn btn-info btn-lg btn-block" id="btn">
              Go To Home
            </Link>
          </div>
        </div>
        {wards.length === 0 ? (
          <div>
            <h4>No Data Found.</h4>
          </div>
        ) : (
          <div className="row">{wardsList}</div>
        )}
      </div>
    );
  }
}

export default WardsList;
