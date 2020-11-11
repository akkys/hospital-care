import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditDoctor extends Component {
  state = {
    name: "",
    expert: "",
    desc: "",
    time: "",
    experts: [
      "Cardiology",
      "Psychology",
      "Neurology",
      "Dermotology",
      "Surgeon",
      "Paramedic",
      "ENT",
      "Consulting",
    ],
    available: "",
    availables: ["Morning", "Afternoon", "Evening", "Night", "Full Day"],
    exp: "",
    contact: "",
  };

  componentDidMount() {
    this.setState({
      experts: this.state.experts.map((exp) => exp.expert),
      expert: this.state.experts[0].expert,
      availables: this.state.availables.map((avail) => avail.available),
      available: this.state.availables[0].available,
    });

    axios
      .get("http://localhost:5000/addDoc/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          expert: res.data.expert,
          desc: res.data.desc,
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleExpert = (e) => {
    this.setState({
      expert: e.target.value,
    });
  };

  handleDesc = (e) => {
    this.setState({
      desc: e.target.value,
    });
  };
  handleTime = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  handleExp = (e) => {
    this.setState({
      exp: e.target.value,
    });
  };

  handleContact = (e) => {
    this.setState({
      contact: e.target.value,
    });
  };

  handleAvailable = (e) => {
    this.setState({
      available: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const docs = {
      name: this.state.name,
      expert: this.state.expert,
      desc: this.state.desc,
      time: this.state.time,
      available: this.state.available,
      exp: this.state.exp,
      contact: this.state.contact,
    };
    console.log(docs);

    axios
      .post(
        "http://localhost:5000/addDoc/update/" + this.props.match.params.id,
        docs
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    this.setState({
      name: "",
      expert: "",
      desc: "",
      time: "",
      available: "",
      exp: "",
      contact: "",
    });
  };

  render() {
    const { name, expert, desc, time, available, exp, contact } = this.state;
    return (
      <div className="container">
        <form className="appt-container" onSubmit={this.handleSubmit}>
          <h2>Add New Doctor</h2>
          <div className="mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <label>Doctor Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Doctor's Full Name"
                  value={name}
                  onChange={this.handleName}
                />
              </div>
              <div className="form-group">
                <label>Expertise In</label>
                <select
                  className="custom-select"
                  value={expert}
                  onChange={this.handleExpert}
                >
                  {this.state.experts.map((expert, i) => {
                    return <option key={i}>{expert}</option>;
                  })}
                </select>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label>Experience in Years</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex. 2 "
                      value={exp}
                      onChange={this.handleExp}
                    />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="form-group">
                    <label>Contact Number</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="9876543210"
                      value={contact}
                      onChange={this.handleContact}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>Available at</label>
                <select
                  className="custom-select"
                  value={available}
                  onChange={this.handleAvailable}
                >
                  {this.state.availables.map((available, i) => {
                    return <option key={i}>{available}</option>;
                  })}
                </select>
              </div>
              <div className="form-group">
                <label>Available Times (in Hours)</label>
                <div className="row">
                  <div className="col-md-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Hours"
                      value={time}
                      onChange={this.handleTime}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>About</label>
                <textarea
                  type="text"
                  className="form-control"
                  rows="4"
                  placeholder="Enter Doctor's description"
                  value={desc}
                  onChange={this.handleDesc}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    id="btn"
                  >
                    <i className="fa fa-pencil mr-2" />
                    Update
                  </button>
                </div>
                <div className="col-md-6">
                  <Link
                    to="/viewDoctors"
                    className="btn btn-success btn-block"
                    id="btn"
                  >
                    <i className="fa fa-ban mr-2" />
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default EditDoctor;
