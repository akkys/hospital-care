import React, { Component } from "react";
import Axios from "axios";
import Doctors from "./Doctors";
import { Link } from "react-router-dom";
import IsLoading from "./IsLoading";

class DoctorsList extends Component {
  state = {
    docs: [],
    isLoading: false,
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/addDoc/").then((res) => {
      this.setState({
        docs: res.data,
        isLoading: true,
      });
      console.log(this.state.docs);
    });
  }

  deleteDocs = (id) => {
    Axios.delete("http://localhost:5000/addDoc/" + id).then((res) =>
      console.log(res.data)
    );

    this.setState({
      docs: this.state.docs.filter((el) => el._id !== id),
    });
  };

  render() {
    const { docs, isLoading } = this.state;

    const doctorList = docs.map((doc, i) => {
      return <Doctors key={i} docs={doc} deleteDocs={this.deleteDocs} />;
    });

    if (!isLoading) {
      return <IsLoading />;
    } else
      return (
        <div className="container appt-container">
          <div className="row">
            <div className="col-md-8">
              <h2>List of Doctors available in our Hospital</h2>
            </div>
            <div className="col-md-2">
              <Link
                to="/addDoctor"
                className="btn btn-danger btn-lg btn-block"
                id="btn"
              >
                Add Doctor
              </Link>
            </div>
            <div className="col-md-2">
              <Link to="/" className="btn btn-info btn-lg btn-block" id="btn">
                Go To Home
              </Link>
            </div>
          </div>

          {docs.length === 0 ? (
            <div>
              <h4>No Data Found.</h4>
            </div>
          ) : (
            <div className="row">{doctorList}</div>
          )}
        </div>
      );
  }
}

export default DoctorsList;
