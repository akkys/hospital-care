import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditAppointment extends Component {
  state = {
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    zipcode: "",
    datetime: "",
    choose: "",
    docName: "",
    docts: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/addAppt/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          contact: res.data.contact,
          address: res.data.address,
          city: res.data.city,
          zipcode: res.data.zipcode,
          datetime: res.data.datetime,
          choose: res.data.choose,
          docName: res.data.docName,
        });
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:5000/addDoc/").then((res) => {
      if (res.data.length > 0) {
        this.setState({
          docts: res.data.map((d) => d.name),
          docName: res.data[0].name,
        });
        console.log(this.state.docts);
        console.log(this.state.docName);
      }
    });
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleContact = (e) => {
    this.setState({
      contact: e.target.value,
    });
  };

  handleAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handleCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  handleZipcode = (e) => {
    this.setState({
      zipcode: e.target.value,
    });
  };

  handletime = (e) => {
    this.setState({
      datetime: e.target.value,
    });
  };

  handleChoose = (e) => {
    this.setState({
      choose: e.target.value,
    });
  };

  handledocName = (e) => {
    this.setState({
      docName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const appointments = {
      name: this.state.name,
      email: this.state.email,
      contact: this.state.contact,
      address: this.state.address,
      city: this.state.city,
      zipcode: this.state.zipcode,
      datetime: this.state.datetime,
      choose: this.state.choose,
      docName: this.state.docName,
    };
    console.log(appointments);
    axios
      .post(
        "http://localhost:5000/addAppt/update/" + this.props.match.params.id,
        appointments
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    this.setState({
      name: "",
      email: "",
      contact: "",
      address: "",
      city: "",
      zipcode: "",
      datetime: "",
      choose: "",
      docName: "",
    });

    // window.location = "/";
  };

  render() {
    const {
      name,
      email,
      contact,
      address,
      city,
      zipcode,
      datetime,
      choose,
      docName,
    } = this.state;
    return (
      <div className="container">
        <form className="appt-container" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-10">
              <h2>New Appointment Form</h2>
            </div>
            <div className="col-md-2">
              <Link to="/" className="btn btn-success btn-block" id="btn">
                <i className="fa fa-chevron-left mr-2" />
                Back to Lists
              </Link>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group">
                <label>Patient Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Patient Full Name"
                  value={name}
                  onChange={this.handleName}
                />
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={this.handleEmail}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="+91 98765 43210"
                  value={contact}
                  onChange={this.handleContact}
                />
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Schedule Date and Time</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      placeholder="+91 98765 43210"
                      value={datetime}
                      onChange={this.handletime}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Doctor Name</label>
                <select
                  className="form-control"
                  value={docName}
                  onChange={this.handledocName}
                >
                  {this.state.docts.map((doc, i) => {
                    return (
                      <option key={i} value={doc}>
                        {doc}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label>Patient Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address"
                  value={address}
                  onChange={this.handleAddress}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter City"
                  value={city}
                  onChange={this.handleCity}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Zipcode"
                  value={zipcode}
                  onChange={this.handleZipcode}
                />
              </div>
              <div className="form-group">
                <label>I Would Like To (Select One)</label>
                <select
                  className="form-control"
                  id="exampleSelect1"
                  value={choose}
                  onChange={this.handleChoose}
                >
                  <option>A New Patient Appointment</option>
                  <option>A Routine Checkup</option>
                  <option>A Comprehensive Health Exam</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="btn"
              >
                <i className="fa fa-pencil mr-2" />
                Update Appointment
              </button>
            </div>
            <div className="col-md-3">
              <Link to="/" className="btn btn-success btn-block" id="btn">
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

export default EditAppointment;
