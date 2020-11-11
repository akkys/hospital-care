import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import NewAppointment from "./components/NewAppointment";
import AppointmentList from "./components/AppointmentList";
import EditAppointment from "./components/EditAppointment";
import AddDoctor from "./components/AddDoctor";
import DoctorsList from "./components/DoctorsList";
import EditDoctor from "./components/EditDoctor";
import RoomsList from "./components/RoomsList";
import AddRoom from "./components/AddRoom";
import EditRoom from "./components/EditRoom";
import PatientRoomList from "./components/PatientRoomList";
import AddPatientRoom from "./components/AddPatientRoom";
import EditPatientRoom from "./components/EditPatientRoom";
import WardsList from "./components/WardsList";
import AmbulanceService from "./components/AmbulanceService";
import BranchList from "./components/BranchList";

const Routers = () => {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={AppointmentList} />
          <Route exact path="/newAppointment" component={NewAppointment} />
          <Route
            exact
            path="/editAppointment/:id"
            component={EditAppointment}
          />
          <Route exact path="/addDoctor" component={AddDoctor} />
          <Route exact path="/viewDoctors" component={DoctorsList} />
          <Route exact path="/editDoctor/:id" component={EditDoctor} />
          <Route exact path="/roomsList" component={RoomsList} />
          <Route exact path="/addRoom" component={AddRoom} />
          <Route exact path="/editRoom/:id" component={EditRoom} />
          <Route exact path="/patientRoomList" component={PatientRoomList} />
          <Route exact path="/addPatientRoom" component={AddPatientRoom} />
          <Route
            exact
            path="/editPatientRoom/:id"
            component={EditPatientRoom}
          />
          <Route exact path="/wardList" component={WardsList} />
          <Route exact path="/ambulanceService" component={AmbulanceService} />
          <Route exact path="/branchList" component={BranchList} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
