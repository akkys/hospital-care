import React, { Component } from "react";

import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  state = {
    curTime: new Date(),
    curDate: new Date(),
  };

  render() {
    return (
      <div>
        <Navbar
          sticky="top"
          bg="info"
          variant="light"
          expand="lg"
          className="mb-5"
        >
          <Navbar.Brand as={Link} to="/">
            <h4 style={{ fontWeight: "500" }}>A S K Hospital</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="mr-auto"
              style={{ fontWeight: "500", fontSize: "16px" }}
            >
              <NavDropdown title="Rooms" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/roomsList"
                  style={{ fontWeight: "500" }}
                >
                  Laboratory Rooms
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/patientRoomList"
                  style={{ fontWeight: "500" }}
                >
                  Patients Rooms
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Facilities" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/ambulanceService"
                  style={{ fontWeight: "500" }}
                >
                  Ambulance Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/wardList"
                  style={{ fontWeight: "500" }}
                >
                  Types of Wards
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Team" id="basic-nav-dropdown">
                <NavDropdown.Item
                  as={Link}
                  to="/viewDoctors"
                  style={{ fontWeight: "500" }}
                >
                  Doctors
                </NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown title="Rooms" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Add Room</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">View Rooms</NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link
              as={Link}
              to="/branchList"
              className="mr-3 "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                color: "rgb(71, 71, 71)",
              }}
            >
              Contact Us
            </Nav.Link>
            <Navbar.Text style={{ fontWeight: "500", fontSize: "15px" }}>
              <i className="fa fa-calendar mr-1" />{" "}
              {this.state.curDate.toLocaleDateString()}
            </Navbar.Text>
            <Navbar.Text
              className="ml-3"
              style={{ fontWeight: "500", fontSize: "15px" }}
            >
              <i className="fa fa-clock-o mr-1" />{" "}
              {this.state.curTime.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
