import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

class EditRoom extends Component {
  state = {
    num: "",
    name: "",
    capacity: "12",
    groups: "",
    fromTime: "",
    toTime: "",
    morning: "",
    evening: "",
    timings: ["AM", "PM"],
    sampleGroups: [
      "Blood",
      "Urine",
      "Stool",
      "Throat Swab",
      "UV Scan",
      "MRI",
      "X-Ray",
    ],
  };

  componentDidMount() {
    this.setState({
      sampleGroups: this.state.sampleGroups.map((group) => group.groups),
      groups: this.state.sampleGroups[0].groups,
      timings: this.state.timings.map((time) => time.timing),
      morning: this.state.timings[0].morning,
      evening: this.state.timings[1].evening,
    });

    Axios.get("http://localhost:5000/addRoom/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          num: res.data.num,
          name: res.data.name,
          capacity: res.data.capacity,
          fromTime: res.data.fromTime,
          toTime: res.data.toTime,
          timing: res.data.timing,
          groups: res.data.groups,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleNum = (e) => {
    this.setState({
      num: e.target.value,
    });
  };

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleCapacity = (e) => {
    this.setState({
      capacity: e.target.value,
    });
  };

  handleGroups = (e) => {
    this.setState({
      groups: e.target.value,
    });
  };

  handleMorning = (e) => {
    this.setState({
      morning: e.target.value,
    });
  };

  handleEvening = (e) => {
    this.setState({
      evening: e.target.value,
    });
  };

  handleFromtime = (e) => {
    this.setState({
      fromTime: e.target.value,
    });
  };

  handleTotime = (e) => {
    this.setState({
      toTime: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const rooms = {
      num: this.state.num,
      name: this.state.name,
      capacity: this.state.capacity,
      fromTime: this.state.fromTime,
      toTime: this.state.toTime,
      morning: this.state.morning,
      evening: this.state.evening,
      groups: this.state.groups,
    };
    console.log(rooms);

    Axios.post(
      "http://localhost:5000/addRoom/update/" + this.props.match.params.id,
      rooms
    )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    this.setState({
      num: "",
      name: "",
      capacity: "12",
      groups: "",
      fromTime: "",
      toTime: "",
      morning: "",
      evening: "",
    });
  };

  render() {
    const {
      num,
      name,
      capacity,
      fromTime,
      toTime,
      groups,
      morning,
      evening,
    } = this.state;
    return (
      <div className="container appt-container mb-5">
        <form onSubmit={this.handleSubmit}>
          <h2>Add a Room</h2>
          <div className="row ">
            <div className="col-md-5">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Room Name"
                  value={name}
                  onChange={this.handleName}
                />
              </div>
            </div>
            <div className="col-md-1">
              <div className="form-group">
                <label>No.</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="1"
                  value={num}
                  onChange={this.handleNum}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <label>Default Capacity</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder=""
                  value={capacity}
                  onChange={this.handleCapacity}
                />
              </div>
            </div>
          </div>
          <div>
            <label>Time Slots</label>
            <div className="form-group row">
              <div className="col-md-2">
                <input
                  type="time"
                  className="form-control"
                  value={fromTime}
                  onChange={this.handleFromtime}
                />
              </div>
              <select
                className="custom-select col-md-1"
                value={morning}
                onChange={this.handleMorning}
              >
                {this.state.timings.map((time, i) => {
                  return <option key={i}>{time}</option>;
                })}
              </select>
              <label className="col-md-1" style={{ textAlign: "center" }}>
                To
              </label>
              <div className="col-md-2">
                <input
                  type="time"
                  className="form-control"
                  value={toTime}
                  onChange={this.handleTotime}
                />
              </div>
              <select
                className="custom-select col-md-1"
                value={evening}
                onChange={this.handleEvening}
              >
                {this.state.timings.map((time, i) => {
                  return <option key={i}>{time}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Sample groups</label>

            <select
              className="col-md-5 form-control"
              value={groups}
              onChange={this.handleGroups}
            >
              {this.state.sampleGroups.map((group, i) => {
                return <option key={i}>{group}</option>;
              })}
            </select>
          </div>
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="btn"
              >
                {" "}
                <i className="fa fa-pencil mr-2" />
                Update
              </button>
            </div>{" "}
            <div className="col-md-2">
              <Link
                to="/roomsList"
                className="btn btn-primary btn-block"
                id="btn"
              >
                <i className="fa fa-ban mr-2" />
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditRoom;
