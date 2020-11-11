import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class EditPatientRoom extends Component {
  state = {
    pid: "",
    name: "",
    age: "",
    gender: "",
    genders: ["Male", "Female", "Others"],
    address: "",
    contact: "",
    admitDate: "",
    status: "",
    patientStatus: ["Treating", "Discharged", "Under Observation"],
    roomNum: "",
    roomType: "",
    roomTypes: [
      "Multibed Ward",
      "Twin Sharing Room",
      "Single Room",
      "Single Deluxe Room",
      "Super Deluxe Room",
      "Suite",
    ],
  };

  componentDidMount() {
    this.setState({
      roomTypes: this.state.roomTypes.map((type) => type.roomType),
      roomType: this.state.roomTypes[0].roomType,
      genders: this.state.genders.map((g) => g.gender),
      gender: this.state.genders[0].gender,
      patientStatus: this.state.patientStatus.map((st) => st.status),
      status: this.state.patientStatus[0].status,
    });

    Axios.get("http://localhost:5000/addPatient/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          pid: res.data.pid,
          name: res.data.name,
          age: res.data.age,
          gender: res.data.gender,
          address: res.data.address,
          contact: res.data.contact,
          admitDate: res.data.admitDate,
          status: res.data.status,
          roomNum: res.data.roomNum,
          roomType: res.data.roomType,
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  handlePid = (e) => {
    this.setState({
      pid: e.target.value,
    });
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  handleGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  handleAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handleContact = (e) => {
    this.setState({
      contact: e.target.value,
    });
  };

  handleAdmitDate = (e) => {
    this.setState({
      admitDate: e.target.value,
    });
  };

  handleStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  handleRoomNum = (e) => {
    this.setState({
      roomNum: e.target.value,
    });
  };

  handleRoomType = (e) => {
    this.setState({
      roomType: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const patients = {
      pid: this.state.pid,
      name: this.state.name,
      age: this.state.age,
      gender: this.state.gender,
      address: this.state.address,
      contact: this.state.contact,
      admitDate: this.state.admitDate,
      status: this.state.status,
      roomNum: this.state.roomNum,
      roomType: this.state.roomType,
    };
    console.log(patients);

    Axios.post(
      "http://localhost:5000/addPatient/update/" + this.props.match.params.id,
      patients
    )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    this.setState({
      pid: "",
      name: "",
      age: "",
      gender: "",
      address: "",
      contact: "",
      admitDate: "",
      status: "",
      roomNum: "",
      roomType: "",
    });
  };

  render() {
    const {
      pid,
      name,
      age,
      gender,
      address,
      contact,
      admitDate,
      status,
      roomNum,
      roomType,
    } = this.state;
    return (
      <div className="container">
        <form className="appt-container" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-9">
              <h2>Add room for Patient</h2>
            </div>
            <div className="col-md-3">
              <Link
                to="/patientRoomList"
                className="btn btn-success btn-block btn-lg"
                id="btn"
              >
                Back to List
              </Link>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-6" style={{ borderRight: "1px solid" }}>
              <h5
                style={{
                  borderBottom: "1px solid",
                  paddingBottom: 10,
                  marginBottom: "3%",
                }}
              >
                Patient's Details
              </h5>
              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <label>Patient ID</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Patient ID"
                      value={pid}
                      onChange={this.handlePid}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-group">
                    <label>Patient Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Patient's Full Name"
                      value={name}
                      onChange={this.handleName}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <label>Admission Date</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      value={admitDate}
                      onChange={this.handleAdmitDate}
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label>Status</label>
                    <select
                      className="custom-select"
                      value={status}
                      onChange={this.handleStatus}
                    >
                      {this.state.patientStatus.map((status, i) => {
                        return <option key={i}>{status}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-5">
                  <div className="form-group">
                    <label>Room Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Room Number"
                      value={roomNum}
                      onChange={this.handleRoomNum}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-group">
                    <label>Room Type</label>
                    <select
                      className="custom-select"
                      value={roomType}
                      onChange={this.handleRoomType}
                    >
                      {this.state.roomTypes.map((type, i) => {
                        return <option key={i}>{type}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h5
                style={{
                  borderBottom: "1px solid",
                  paddingBottom: 10,
                  marginBottom: "3%",
                }}
              >
                Patient's Personal Details
              </h5>
              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Patient's Age"
                      value={age}
                      onChange={this.handleAge}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-group">
                    <label>Gender</label>
                    <select
                      className="custom-select"
                      value={gender}
                      onChange={this.handleGender}
                    >
                      {this.state.genders.map((gender, i) => {
                        return <option key={i}>{gender}</option>;
                      })}
                    </select>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="form-group">
                    <label>Contact</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="9876543210"
                      value={contact}
                      onChange={this.handleContact}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="form-group">
                    <label>Address</label>
                    <textarea
                      type="text"
                      rows="5"
                      className="form-control"
                      placeholder="Enter Patient's Complete Address"
                      value={address}
                      onChange={this.handleAddress}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <button
                type="submit"
                id="btn"
                className="btn btn-primary btn-block"
              >
                Update Room
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPatientRoom;
