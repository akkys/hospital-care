import React, { Component } from "react";
import axios from "axios";
import IsLoading from "./IsLoading";
import { Link } from "react-router-dom";
import PatientList from "./PatientList";

class PatientRoomList extends Component {
  state = {
    patients: [],
    isLoading: false,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/addPatient/")
      .then((res) => {
        this.setState({
          patients: res.data,
          isLoading: true,
        });
        console.log(this.state.patients);
      })
      .catch((err) => console.log(err));
  }

  deletePatient = (id) => {
    axios
      .delete("http://localhost:5000/addPatient/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      patients: this.state.patients.filter((el) => el._id !== id),
    });
  };
  render() {
    const { patients, isLoading } = this.state;

    const patientList = patients.map((patient, i) => {
      return (
        <PatientList
          patient={patient}
          key={i}
          deletePatient={this.deletePatient}
        />
      );
    });

    if (!isLoading) {
      return <IsLoading />;
    } else
      return (
        <div className="container appt-container">
          <div className="row">
            <div className="col-md-9">
              <h2>Occupied Patients Rooms</h2>
            </div>
            <div className="col-md-3">
              <Link
                to="/addPatientRoom"
                className="btn btn-lg btn-block btn-primary"
                id="btn"
              >
                Add Room for Patient
              </Link>
            </div>
          </div>
          {patients.length === 0 ? (
            <div>
              <h4>No Room has been booked for Patients.</h4>
            </div>
          ) : (
            <table className="table table-active">
              <thead>
                <tr>
                  <th scope="col">PID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Admission Date</th>
                  <th scope="col">Room No.</th>
                  <th scope="col">Room Type</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Address</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {patientList}
            </table>
          )}
        </div>
      );
  }
}

export default PatientRoomList;
