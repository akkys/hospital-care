import React, { Component } from "react";
import axios from "axios";
import Appointments from "./Appointments";
import { Link } from "react-router-dom";
import IsLoading from "./IsLoading";

class AppointmentList extends Component {
  state = {
    appointments: [],
    isLoading: false,
    // date: new Date().toLocaleDateString(),
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/addAppt/")
      .then((res) => {
        this.setState({
          appointments: res.data,
          isLoading: true,
        });
        console.log(this.state.appointments);
      })
      .catch((err) => console.log(err));
  }

  deleteAppt = (id) => {
    axios
      .delete("http://localhost:5000/addAppt/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      appointments: this.state.appointments.filter((el) => el._id !== id),
    });
  };

  render() {
    const { appointments, isLoading } = this.state;
    console.log(appointments);

    const appointmentsList = appointments.map((appt, i) => {
      return (
        <Appointments
          appt={appt}
          key={i}
          deleteAppt={this.deleteAppt}
          // date={this.state.date}
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
              <h2>Appointments List</h2>
            </div>
            <div className="col-md-3">
              <Link
                to="/newAppointment"
                className="btn btn-lg btn-block btn-primary"
                id="btn"
              >
                Make New Appointment
              </Link>
            </div>
          </div>

          {appointments.length === 0 ? (
            <div>
              <h4>No Appointment Registered.</h4>
            </div>
          ) : (
            <table className="table table-active">
              <thead>
                <tr>
                  <th scope="col" style={{ width: "100px" }}>
                    Date
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Contact</th>
                  <th scope="col">Address</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Type</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {appointmentsList}
            </table>
          )}
        </div>
      );
  }
}

export default AppointmentList;
